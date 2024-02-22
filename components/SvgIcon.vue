<script setup lang="ts">
type Props = {
  prefix?: string;
  name: string;
};
const props: Props = withDefaults(defineProps<Props>(), {
  prefix: "icon",
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg class="SvgIcon" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>
