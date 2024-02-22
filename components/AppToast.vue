<script setup lang="ts">
const { toast, closeToast } = useToast();
</script>

<template>
  <Teleport to="body">
    <div class="Toast__container">
      <div v-if="toast" class="Toast__error" @click="closeToast">
        {{ toast }}
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.Toast__container {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 110;
  padding: 20px;
}

.Toast__error {
  padding: 10px;
  background-color: crimson;
  color: aliceblue;
  text-align: center;
  z-index: 10;
  cursor: pointer;
  border-radius: 5px;
}
</style>
