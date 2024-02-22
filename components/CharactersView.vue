<script setup lang="ts">
import type { CharactersGql } from "~/types";

type Props = {
  characters: CharactersGql;
};
defineProps<Props>();
</script>

<template>
  <section class="Characters container">
    <h1 class="Characters__title heading-1">Characters</h1>
    <ul class="Characters__list">
      <li v-for="character in characters" :key="character?.id ?? ''">
        <app-card
          :title="character?.name ?? ''"
          :to="{ name: 'characters-id', params: { id: character?.id } }"
          :image="{
            src: character?.image ?? '',
            alt: `portrait-${character?.name}`,
          }"
          :surtitle="character?.species ?? ''"
        />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.Characters__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 30px;
  margin-bottom: 45px;
}
</style>
