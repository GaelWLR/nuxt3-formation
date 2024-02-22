<script setup lang="ts">
import type { Episode } from "~/types";

const { $axios } = useNuxtApp();

const { data } = await useAsyncData("episodes", async () => {
  const response = await $axios.get<{ results: Episode[] }>("/episode");

  return response.data.results;
});

const episodes = computed(() => data.value ?? []);
</script>

<template>
  <episodes-view :episodes="episodes" />
</template>
