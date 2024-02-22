<template>
  <nav class="Nav">
    <ul class="Nav__links">
      <li>
        <NuxtLink to="/episodes" class="Nav__link">
          <span class="Nav__link__text">Episodes</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/characters" class="Nav__link">
          <span class="Nav__link__text">Characters</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "utilities/colors";
@use "utilities/functions" as func;
@use "utilities/shadows";

.Nav {
  margin-top: 120px;
  padding-top: 45px;
  padding-inline: 20px;
}

.Nav__links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.Nav__link {
  position: relative;
  padding-inline: 3px;
  font-size: 1.8rem;
  font-weight: 600;
  text-shadow: shadows.$text-soft;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: colors.$darkGreen;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s func.ease(out-quart);
  }

  &:hover,
  &:focus,
  &.router-link-exact-active {
    &::before {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.35s func.ease(out-quart);
    }
  }
}

.Nav__link__text {
  position: relative;
}
</style>
