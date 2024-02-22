# Manage layouts

- Fill the homepage without layout

```vue
<script setup lang="ts"></script>

<template>
  <section class="Homepage container">
    <img
      class="Homepage__image fullwidth-content"
      src="~/assets/images/landing-3.jpg"
    />
    <div class="Homepage__content">
      <svg-icon class="Homepage__channel" name="adult-swim-logo" />
      <p class="Homepage__description">
        Rick is a mentally-unbalanced but scientifically gifted old man who has
        recently reconnected with his family. He spends most of his time
        involving his young grandson Morty in dangerous, outlandish adventures
        throughout space and alternate universes. Compounded with Morty's
        already unstable family life, these events cause Morty much distress at
        home and school.
      </p>
      <app-button label="Explore the show" to="/episodes" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "utilities/colors";
@use "utilities/mixins";
@use "utilities/shadows";

.Homepage {
  position: relative;
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 120px;

  &::after {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;

    @include mixins.scrimGradient(colors.$dark, "to right");
  }
}

.Homepage__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Homepage__content {
  align-self: center;
  z-index: 2;
  position: relative;
  max-width: 900px;
  color: colors.$light;
}

.Homepage__channel {
  width: 120px;
  height: auto;
  aspect-ratio: 5.41;
  margin-bottom: 20px;
}

.Homepage__description {
  margin-bottom: 45px;
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: shadows.$text-soft;
}
</style>
```

- Create the 2 layouts (landing & default)

```vue
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
```

```vue
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
```

- Show that nothing happen
- Add `NuxtLayout` in `app.vue`
- Get the correct layout with `definePageMeta`
