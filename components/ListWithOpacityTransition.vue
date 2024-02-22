<script setup lang="ts">
const onBeforeEnter = (el: Element) => {
  if (el instanceof HTMLLIElement) {
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
  } else {
    console.warn(
      "ListWithOpacityTransition only accept li as children elements."
    );
  }
};

const onEnter = (el: Element) => {
  if (el instanceof HTMLLIElement) {
    const index = Number(el.dataset.index ?? 0);

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 150);
  } else {
    // Already warn in onBeforeEnter
  }
};
</script>

<template>
  <transition-group
    tag="ul"
    class="ListWithOpacityTransition"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
  >
    <slot />
  </transition-group>
</template>

<style scoped>
.ListWithOpacityTransition {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  margin-bottom: 45px;
}
</style>
