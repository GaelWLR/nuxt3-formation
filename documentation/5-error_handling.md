# Error handling

- Open `episodes/[id].vue`
- Throw new Error in a page and show default behavior (programmatic & SSR)
- Create `error.vue` and show the custom page

```vue
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>

<template>
  <div>
    <NuxtLayout>
      <h1>Error {{ error?.statusCode }}</h1>
      <h2>
        {{ error?.message }}
      </h2>
    </NuxtLayout>
  </div>
</template>
```

- 500 SSR is ok but there's still a bug on programmatic navigation
- Skip clearError and useError explanation because of Vue.js bug currently
- Handling fetch data error client side (show error in fetchCharacters in episodes/id.vue)
  - Use a try catch and log at first
  - Trigger the toast hook to display something

```ts
const { openToast } = useToast();

const fetchCharacters = async () => {
  try {
    throw new Error("Unexpected error during characters fetching.");

    characters.value = await Promise.all(
      episode.value?.characters.map(async (characterLink: string) => {
        const response = await $axios.get<Character>(characterLink);

        return response?.data;
      }) ?? []
    );
  } catch (e) {
    console.error(e);

    openToast("An error occurred while fetching characters.");
  }
};
```

- Handling async data error (show error in async data in episodes/id.vue)
  - Add a throw (seems like the same, but it's not)
  - Check error log and show that it does not stop at the error and only crashes if we try to use the data
  - Get the error from async data and handle it and add more logs with the plugin

```ts
const { data: episode, error } = await useAsyncData(
  `episode-${episodeId.value}`,
  async () => {
    throw new Error("Unexpected error during async data fetching.");

    const response = await $axios.get<Episode>(`/episode/${episodeId.value}`);

    return response?.data;
  }
);

if (error.value) {
  throw createError({
    fatal: true,
    statusCode: 500,
    message: "An error occurred while fetching the episode.",
    cause: error.value?.cause,
    stack: error.value?.stack,
  });
}
```
