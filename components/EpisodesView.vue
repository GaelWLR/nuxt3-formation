<script setup lang="ts">
import type { Episode } from "~/types";

type Props = {
  episodes: Episode[];
};
defineProps<Props>();
</script>

<template>
  <section class="Episodes container">
    <h1 class="Episodes__title heading-1">Episodes</h1>
    <ul class="Episodes__list">
      <li v-for="episode in episodes" :key="episode.id">
        <app-card
          :title="episode.name"
          :to="{ name: 'episodes-id', params: { id: episode.id } }"
          :surtitle="episode.episode"
          :date="episode.air_date"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.Episodes__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 30px;
  margin-bottom: 45px;
}
</style>
