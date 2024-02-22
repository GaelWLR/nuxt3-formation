<script setup lang="ts">
import type { CharacterGql } from "~/types";

type Props = {
  character: CharacterGql;
  status?: string;
};
const props = defineProps<Props>();

type Emits = {
  (event: "fetch-status"): void;
};
defineEmits<Emits>();

const computedStatusButtonGender = computed(() => {
  switch (props.character?.gender) {
    case "Male":
      return "he";
    case "Female":
      return "she";
    default:
      return "it";
  }
});

const statusLowerCase = computed(() =>
  props.status ? props.status.toLowerCase() : ""
);
</script>

<template>
  <section class="Character container">
    <div class="Character__content">
      <div
        class="Character__portrait"
        :class="[
          { 'Character__portrait--statusDisplayed': status },
          `Character__portrait--status-${statusLowerCase}`,
        ]"
      >
        <Transition name="status-label">
          <span v-if="status" class="Character__status__label">
            {{ status }}
          </span>
        </Transition>
        <div class="Character__image">
          <img :src="character?.image ?? ''" alt="" />
        </div>
        <div class="Character__status">
          <app-button
            v-if="!status"
            :label="`Is ${computedStatusButtonGender} alive ?`"
            @click="$emit('fetch-status')"
          />
        </div>
      </div>
      <div class="Character__infos">
        <h1 class="Character__title heading-1">
          {{ character?.name }}
        </h1>
        <ul class="Character__infos__list">
          <li v-if="character?.species" class="Character__infos__item">
            <span class="Character__infos__item__icon">
              <svg-icon name="species" />
            </span>
            {{ character?.species }}
          </li>
          <li v-if="character?.type" class="Character__infos__item">
            <span class="Character__infos__item__icon">
              <svg-icon name="type" />
            </span>
            {{ character?.type }}
          </li>
          <li v-if="character?.gender" class="Character__infos__item">
            <span class="Character__infos__item__icon">
              <svg-icon name="gender" />
            </span>
            {{ character?.gender }}
          </li>
          <li v-if="character?.origin?.name" class="Character__infos__item">
            <span class="Character__infos__item__icon">
              <svg-icon name="origin" />
            </span>
            {{ character?.origin?.name }}
          </li>
          <li v-if="character?.location?.name" class="Character__infos__item">
            <span class="Character__infos__item__icon">
              <svg-icon name="location" />
            </span>
            {{ character?.location?.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "utilities/colors";
@use "utilities/functions" as func;

.Character {
  margin-top: 100px;
}

.Character__content {
  display: flex;
  align-items: flex-start;
  gap: 50px;
}

.Character__portrait {
  position: relative;

  &--status-alive {
    color: colors.$green;
  }

  &--status-dead {
    color: red;
  }

  &--status-unknown {
    color: colors.$maize;
  }
}

.Character__image {
  border-radius: 50%;
  overflow: hidden;

  img {
    min-width: 200px;
    aspect-ratio: 1 / 1;
  }
}

.Character__title {
  margin-top: 0;
  font-size: clamp(4rem, 5vw, 10rem);
}

.Character__infos {
  flex: 1;
}

.Character__infos__list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.Character__infos__item {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-basis: 300px;
  color: colors.$light;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.1;
}

.Character__infos__item__icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  color: colors.$dark;
  background-color: colors.$buff;
  border-radius: 50%;

  .SvgIcon {
    width: 40px;
    height: 40px;
  }
}

.Character__status {
  margin-top: 50px;
  text-align: center;
}

.Character__status__label {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 50%;
  border: 10px solid currentColor;
  font-size: 6rem;
  font-weight: 900;
  line-height: 1;
  // background-color: colors.$light;
  text-transform: capitalize;
  transform: translate(-50%, -80%) rotate(5deg);
}

.status-label-enter-active,
.status-label-leave-active {
  transition:
    opacity 1s func.ease(out-quart),
    transform 0.5s func.ease(in-quint);
}

.status-label-enter-from,
.status-label-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) rotate(5deg) scale(5);
}
</style>
