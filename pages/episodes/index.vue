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
      <NuxtLink :to="{ name: 'episodes-id', params: { id: episode.id } }">
        {{ episode.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
