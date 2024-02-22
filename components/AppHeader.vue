<template>
  <header class="Header">
    <NuxtLink to="/" class="Header__logo">
      <svg-icon name="logo" />
    </NuxtLink>
  </header>
</template>

<style scoped lang="scss">
@use "utilities/colors";
@use "utilities/mixins";

.Header {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  padding-top: 20px;
  padding-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @include mixins.scrimGradient(colors.$dark);
  }
}

.Header__logo {
  position: relative;
  display: block;

  .icons {
    width: 250px;
    height: auto;
    aspect-ratio: 3.25;
  }
}
</style>
