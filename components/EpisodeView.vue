<script setup lang="ts">
import type { Character, Episode } from "~/types";

type Props = {
  episode: Episode;
  characters: Character[];
};
const props = defineProps<Props>();

type Emits = {
  (event: "fetch-characters"): void;
};
defineEmits<Emits>();

const formattedId = computed(() =>
  props.episode.id.toString().padStart(4, "#00")
);
</script>

<template>
  <section class="Episode container">
    <div class="Episode__infos">
      <span>{{ episode?.air_date }}</span>
      <span>{{ episode?.episode }}</span>
    </div>

    <h1 class="Episode__title heading-1">
      <span class="Episode__id">{{ formattedId }}</span>
      {{ episode?.name }}
    </h1>

    <div class="Episode__characters">
      <h2 class="Episode__characters__title heading-2">
        {{ $t("episodes.characters") }}
      </h2>
      <div v-if="!characters.length" class="Episode__characters__load">
        <app-button
          :label="$t('episodes.loadCharacters')"
          @click="$emit('fetch-characters')"
        />
      </div>
      <list-with-opacity-transition>
        <li
          v-for="(character, index) in characters"
          class="Episode__character"
          :key="character.id"
          :style="{ '--i': index }"
          :data-index="index"
        >
          <app-card
            :title="character.name"
            :to="{ name: 'characters-id', params: { id: character?.id } }"
            :image="{
              src: character?.image,
              alt: `portrait-${character?.name}`,
            }"
            variant="small"
          />
        </li>
      </list-with-opacity-transition>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "utilities/colors";
@use "utilities/functions" as func;

.Episode {
  margin-top: 30px;
}

.Episode__infos {
  display: flex;
  gap: 15px;
  font-size: 2rem;
  font-weight: 600;
}

.Episode__id {
  display: inline-block;
  font-size: 4rem;
  font-weight: 800;
}

.Episode__title {
  display: inline-flex;
  align-items: flex-start;
  gap: 20px;
  font-size: clamp(4rem, 7vw, 15rem);
}

.Episode__characters {
  margin-top: 70px;
}

.Episode__characters__title {
  margin-bottom: 30px;
}

.Episode__characters__load {
  margin-top: 100px;
  text-align: center;
}

.Episode__character {
  transition:
    opacity 0.5s func.ease(out-quart),
    transform 0.5s func.ease(out-quart);
}
</style>
