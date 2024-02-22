<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

definePageMeta({
  layout: "landing",
});

useHead({
  title: t("homepage.title"),
});

useSeoMeta({
  title: t("homepage.title"),
  ogTitle: t("homepage.title"),
  description: t("homepage.description"),
  ogDescription: t("homepage.description"),
  ogImage: "https://example.com/og-image.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <section class="Homepage container">
    <img
      class="Homepage__image fullwidth-content"
      src="~/assets/images/landing-3.jpg"
    />
    <div class="Homepage__content">
      <svg-icon class="Homepage__channel" name="adult-swim-logo" />
      <p class="Homepage__description">
        {{ $t("homepage.description") }}
      </p>
      <app-button
        :label="$t('homepage.button')"
        :to="localePath('/episodes')"
      />
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
