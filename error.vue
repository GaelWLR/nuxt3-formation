<script setup lang="ts">
defineProps({
  error: Object,
});
</script>

<template>
  <div>
    <NuxtLayout>
      <h1>Error {{ error?.statusCode }}</h1>
      <h2>
        {{ error?.message }}
      </h2>
    </NuxtLayout>
  </div>
</template>
