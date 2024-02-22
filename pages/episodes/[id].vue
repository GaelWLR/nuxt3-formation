<script setup lang="ts">
import type { Character, Episode } from "~/types";

// throw new Error("Unexpected error in page setup.");

const { $axios } = useNuxtApp();
const route = useRoute();

const episodeId = computed(() => route.params.id);

const { data: episode, error } = await useAsyncData(
  `episode-${episodeId.value}`,
  async () => {
    // throw new Error("Unexpected error during async data fetching.");

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

const characters = ref<Character[]>([]);

const { openToast } = useToast();

const fetchCharacters = async () => {
  try {
    // throw new Error("Unexpected error during characters fetching.");

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
</script>

<template>
  <episode-view
    v-if="episode"
    :episode="episode"
    :characters="characters"
    @fetch-characters="fetchCharacters"
  />
</template>
