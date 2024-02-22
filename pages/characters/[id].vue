<script setup lang="ts">
const route = useRoute();

const characterId = computed(() => route.params.id?.toString());

const { data } = await useAsyncGql("character", {
  id: characterId.value.toString(),
});

const character = computed(() => data.value?.character ?? {});

const status = ref("");

const fetchStatus = async () => {
  const statusData = await GqlCharacterStatus({
    id: characterId.value.toString(),
  });

  status.value = statusData.character?.status ?? "Unknown";
};

defineI18nRoute({
  paths: {
    en: "/characters/[id]",
    fr: "/personnages/[id]",
  },
});

// setI18nParams({
//   en: { slug: data.slugs.en },
//   nl: { slug: data.slugs.nl }
// })

useHead({
  title: character.value?.name,
});
</script>

<template>
  <character-view
    :character="character"
    :status="status"
    @fetch-status="fetchStatus"
  />
</template>
