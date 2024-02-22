<script setup lang="ts">
const { data } = await useAsyncGql("characters");

const characters = computed(() => data.value?.characters?.results ?? []);

defineI18nRoute({
  paths: {
    en: "/characters",
    fr: "/personnages",
  },
});
</script>

<template>
  <characters-view :characters="characters" />
</template>
