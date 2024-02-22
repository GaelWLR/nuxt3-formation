<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

type Props = {
  title: string;
  to: RouteLocationRaw;
  surtitle?: string;
  date?: string;
  image?: {
    src: string;
    alt: string;
  };
  variant?: "normal" | "small";
};
withDefaults(defineProps<Props>(), {
  surtitle: "",
  date: "",
  image: undefined,
  variant: "normal",
});
</script>

<template>
  <article class="Card" :class="[`Card--${variant}`]">
    <div class="Card__content">
      <div class="Card__top">
        <p class="Card__infos" v-if="surtitle || date">
          <span class="Card__surtitle" v-if="surtitle">
            {{ surtitle }}
          </span>
          <span class="Card__date" v-if="date">
            {{ date }}
          </span>
        </p>
        <img
          v-if="image"
          class="Card__image"
          :src="image.src"
          :alt="image.alt"
        />
      </div>
      <div class="Card__bottom">
        <h3 class="Card__title">
          <NuxtLinkLocale :to="to" class="Card__link">
            {{ title }}
          </NuxtLinkLocale>
        </h3>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "utilities/colors";
@use "utilities/functions" as func;

.Card {
  position: relative;
  height: 100%;
  padding: 5px;
  background-image: linear-gradient(
    to bottom,
    colors.$light 33.33%,
    colors.$lightGreen,
    colors.$darkGreen 66.66%
  );
  background-size: 100% 300%;
  background-position: top;
  transition: background-position 0.2s func.ease(out-quint);

  &:hover {
    background-position: bottom;
    transition: background-position 0.6s func.ease(out-quint);

    .Card__title {
      color: colors.$darkGreen;
      transition: color 0.4s func.ease(out-quint);
    }
  }
}

.Card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
  min-height: 320px;
  padding: 15px;
  background-color: colors.$dark;
}

.Card__infos {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 500;
}

.Card__image {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.Card__title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.1;
  transition: color 0.2s func.ease(out-quint);
}

.Card__link {
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

// Small variant
.Card--small {
  .Card__content {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    min-height: auto;
  }

  .Card__image {
    width: 70px;
  }
}
</style>
