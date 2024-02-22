# Data fetching

- Present the goal (use the final project):
  - Fetch episodes (full and list) with REST
  - Fetch characters (full and list) with GraphQL

## Page episodes (list)

- Install axios

```bash
npm i -D axios
```

- Explain that a plugins are used to have access to the nuxt app and modify it and there are autoloaded
- This one is used to have access to the configured axios instance everywhere
- Create a first version with hardcoded `baseURL`

```ts
import axios from "axios";

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
```

- Add runtime config `httpHost` in `nuxt.config.ts` /!\ RESTART AFTER

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      httpHost: "https://rickandmortyapi.com/api",
    },
  },
})
```
- Use it in the axios plugin
```ts
const config = nuxtApp.$config;

const axiosInstance = axios.create({
  baseURL: config.public.httpHost as string,
});
```

- In `pages/episodes/index.vue`
- Get the axios instance from `useNuxtApp`
- Show that for now the `$axios` is of type unknown and add the type declaration in the plugin

```ts
import type { AxiosInstance } from "axios";

// Add type to NuxtApp to avoid unknown error
declare module "#app" {
  interface NuxtApp {
    $axios: AxiosInstance;
  }
}
```

- Add a simple fetch at `onMounted` and show that the fetch is done on client side

```ts
import type { Episode } from "~/types";

const { $axios } = useNuxtApp();

const episodes = ref<Episode[]>([]);

onMounted(async () => {
  const { data } = await $axios.get("/episode");

  episodes.value = data.results;
});
```

- Replace by `useAsyncData`

```ts
const { data } = await useAsyncData("episodes", async () => {
  const response = await $axios.get<{ results: Episode[] }>("/episode");

  return response.data.results;
});

const episodes = computed(() => data.value ?? []);
```

- Add frontend component

```vue
<episodes-view :episodes="episodes" />
```

## Page episode (full)

- Add the async data fetch

```ts
const { $axios } = useNuxtApp();

const route = useRoute();

const episodeId = computed(() => route.params.id);

const { data: episode } = await useAsyncData(
  `episode-${episodeId.value}`,
  async () => {
    const response = await $axios.get(`/episode/${episodeId.value}`);

    return response?.data;
  }
);
```

- Display the episode name to use the data
- Add a new feature to display the episode characters when you click on a button (client fetching)

```ts
const characters = ref<Character[]>([]);

const fetchCharacters = async () => {
  characters.value = await Promise.all(
    episode.value?.characters.map(async (characterLink: string) => {
      const response = await $axios.get<Character>(characterLink);

      return response?.data;
    }) ?? []
  );
};
```

```vue
<button @click="fetchCharacters">Fetch characters</button>
<ul>
  <li v-for="character in characters" :key="character.id">
    {{ character.name }}
  </li>
</ul>
```

- Add frontend components


```vue
<episode-view
  v-if="episode"
  :episode="episode"
  :characters="characters"
  @fetch-characters="fetchCharacters"
/>
```

## Page characters (list)

- Explain that we are going to use a specific library but there are multiple ways to fetch a graphql endpoint
- Install `nuxt-graphql-client`

```bash
npm i -D nuxt-graphql-client
```

- Configure the module in `nuxt.config.ts`

```ts
modules: ["nuxt-graphql-client"],
runtimeConfig: {
  public: {
    GQL_HOST: "https://rickandmortyapi.com/graphql",
    httpHost: "https://rickandmortyapi.com/api",
  },
},
```

- Create a gql query `queries/characters.gql` (maybe restart nuxt for queries)

```graphql
query characters {
  characters {
    results {
      id
      name
      species
      image
    }
  }
}
```

- Use the query in your page, explain the `useAsyncGql` hook

```ts
const { data } = await useAsyncGql("characters");

const characters = computed(() => data.value?.characters?.results ?? []);
```

- Add frontend components

```vue
<characters-view :characters="characters" />
```

## Page character (full)

- Create the query at `queries/character.gql`

```graphql
query character($id: ID!) {
  character(id: $id) {
    id
    name
    species
    type
    gender
    origin {
      name
    }
    location {
      name
    }
    image
  }
}
```

- Same as the episode page, add character fetching in async data

```ts
const route = useRoute();

const characterId = computed(() => route.params.id?.toString());

const { data } = await useAsyncGql("character", {
  id: characterId.value.toString(),
});

const character = computed(() => data.value?.character ?? {});
```

- Add a query for the character status in `queries/characterStatus.gql`

```graphql
query characterStatus($id: ID!) {
  character(id: $id) {
    status
  }
}
```

- Add character status fetching in the page and explain the origin of `GqlCharacterStatus`

```ts
const status = ref("");

const fetchStatus = async () => {
  const statusData = await GqlCharacterStatus({
    id: characterId.value.toString(),
  });

  status.value = statusData.character?.status ?? "Unknown";
};
```

```vue
<button @click="fetchStatus">Fetch status</button>
<p>Status: {{ status }}</p>
```

- Add frontend components

```vue
<character-view
  :character="character"
  :status="status"
  @fetch-status="fetchStatus"
/>
```
