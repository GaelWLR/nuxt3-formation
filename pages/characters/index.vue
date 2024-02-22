<script setup lang="ts">
const { t } = useI18n();

const { data } = await useAsyncGql("characters");

const characters = computed(() => data.value?.characters?.results ?? []);

defineI18nRoute({
  paths: {
    en: "/characters",
    fr: "/personnages",
  },
});

useHead({
  title: t("characters.title"),
});

useSeoMeta({
  title: t("characters.title"),
  ogTitle: t("characters.title"),
  description: t("characters.description"),
  ogDescription: t("characters.description"),
  ogImage: "https://example.com/og-image.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <characters-view :characters="characters" />
</template>
