<template>
  <div class="page">
    <app-header />
    <div class="page-layout">
      <aside class="page-side">
        <app-nav class="page-menu" />
      </aside>
      <main class="page-main">
        <slot />
      </main>
    </div>
    <app-toast />
  </div>
</template>

<style scoped lang="scss">
@use "utilities/colors";

.page {
  color: colors.$light;
  background-color: colors.$dark;
  background-image: url("~/assets/images/stars.png");
  background-size: 700px;
  background-position-x: 120px;
}

.page-layout {
  display: flex;
  min-height: 100vh;
}

.page-side {
  width: 250px;
}

.page-main {
  flex-grow: 1;
  padding-top: 120px;
}

.page-menu {
  position: sticky;
  top: 120px;
}
</style>
