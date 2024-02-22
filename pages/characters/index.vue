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
