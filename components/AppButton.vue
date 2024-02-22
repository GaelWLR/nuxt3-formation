<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

type Props = {
  label: string;
  to?: RouteLocationRaw;
  href?: string;
};
defineProps<Props>();
</script>

<template>
  <NuxtLink v-if="to || href" class="Button" :to="to" :href="href">
    <img src="~/assets/images/portal.png" alt="Portal" class="Button__portal" />
    <span class="Button__label">
      {{ label }}
    </span>
  </NuxtLink>
  <button v-else class="Button" :href="href">
    <img src="~/assets/images/portal.png" alt="Portal" class="Button__portal" />
    <span class="Button__label">
      {{ label }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use "utilities/colors";
@use "utilities/functions" as func;
@use "utilities/shadows";

.Button {
  overflow: hidden;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 48px;
  padding: 5px 35px;
  color: colors.$light;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  background-color: colors.$dark;
  box-shadow: 0 0 0 1px colors.$green;
  cursor: pointer;
  border-radius: 9999px;
  transition: box-shadow 0.2s ease-out 0.05s;

  &:hover {
    box-shadow: 0 0 35px -10px colors.$darkGreen;

    .Button__portal {
      scale: 1.1;
      opacity: 1;
      transition:
        scale 0.5s func.ease(out-back),
        opacity 0.1s func.ease(out-quart);
    }
  }
}

.Button__label {
  position: relative;
  text-shadow: shadows.$text-soft;
}

.Button__portal {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  translate: 0 -50%;
  scale: 0;
  opacity: 0;
  animation: portal infinite 10s linear;
  transition:
    scale 0.35s func.ease(out-quart),
    opacity 0.1s func.ease(out-quart) 0.15s;
}

@keyframes portal {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>
