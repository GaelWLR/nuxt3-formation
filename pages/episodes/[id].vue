<script setup lang="ts">
import type { Character, Episode } from "~/types";

const { $axios } = useNuxtApp();

const route = useRoute();

const episodeId = computed(() => route.params.id);

const { data: episode } = await useAsyncData(
  `episode-${episodeId.value}`,
  async () => {
    const response = await $axios.get<Episode>(`/episode/${episodeId.value}`);

    return response?.data;
  }
);

const characters = ref<Character[]>([]);

const fetchCharacters = async () => {
  characters.value = await Promise.all(
    episode.value?.characters.map(async (characterLink: string) => {
      const response = await $axios.get<Character>(characterLink);

      return response?.data;
    }) ?? []
  );
};
</script>

<template>
  <episode-view
    v-if="episode"
    :episode="episode"
    :characters="characters"
    @fetch-characters="fetchCharacters"
  />
</template>
