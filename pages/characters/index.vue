<script setup lang="ts">
const { data } = await useAsyncGql("characters");

const characters = computed(() => data.value?.characters?.results ?? []);
</script>

<template>
  <characters-view :characters="characters" />
</template>
