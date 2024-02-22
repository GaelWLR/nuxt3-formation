# Pages creation

- Create the `pages/episodes.vue`
- Create a list of links with a data structure to introduce `NuxtLink`

```vue
<script setup lang="ts">
const episodes = ref([
  { id: 1, name: "Episode 1" },
  { id: 2, name: "Episode 2" },
  { id: 3, name: "Episode 3" },
  { id: 4, name: "Episode 4" },
  { id: 5, name: "Episode 5" },
  { id: 6, name: "Episode 6" },
  { id: 7, name: "Episode 7" },
  { id: 8, name: "Episode 8" },
  { id: 9, name: "Episode 9" },
  { id: 10, name: "Episode 10" },
]);
</script>

<template>
  <h1>Episodes</h1>

  <ul>
    <li v-for="episode in episodes" :key="episode.id">
      <NuxtLink :to="`/episodes/${episode.id}`">
        {{ episode.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
```

- Show that with this `NuxtLink` parameters page render but with an object with named route it failed
- Create `pages/episodes/[id].vue` to remove the error

```vue
<script setup lang="ts"></script>

<template>
  <h1>Episode</h1>
</template>
```

- Move `pages/episodes.vue` to `pages/episodes/index.vue`


- Do the same for characters

```vue
<script setup lang="ts">
const characters = ref([
  { id: 1, name: "Rick" },
  { id: 2, name: "Morty" },
  { id: 3, name: "Summer" },
  { id: 4, name: "Beth" },
  { id: 5, name: "Jerry" },
  { id: 6, name: "Birdperson" },
  { id: 7, name: "Squanchy" },
  { id: 8, name: "Tammy" },
  { id: 9, name: "Mr. Poopybutthole" },
  { id: 10, name: "Unity" },
]);
</script>

<template>
  <h1>Characters</h1>

  <ul>
    <li v-for="character in characters" :key="character.id">
      <NuxtLink :to="{ name: 'characters-id', params: { id: character.id } }">
        {{ character.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
```

```vue
<script setup lang="ts"></script>

<template>
  <h1>Character</h1>
</template>
```
