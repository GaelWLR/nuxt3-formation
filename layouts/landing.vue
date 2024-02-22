<template>
  <div class="page-landing">
    <app-header />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "utilities/colors";

.page-landing {
  color: colors.$light;
  background-color: colors.$dark;
}
</style>
