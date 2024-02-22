<script setup lang="ts">
import type { Episode } from "~/types";

const { $axios } = useNuxtApp();
const { t } = useI18n();

const { data } = await useAsyncData("episodes", async () => {
  const response = await $axios.get<{ results: Episode[] }>("/episode");

  return response.data.results;
});

const episodes = computed(() => data.value ?? []);

useHead({
  title: t("episodes.title"),
});

useSeoMeta({
  title: t("episodes.title"),
  ogTitle: t("episodes.title"),
  description: t("episodes.description"),
  ogDescription: t("episodes.description"),
  ogImage: "https://example.com/og-image.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <episodes-view :episodes="episodes" />
</template>
