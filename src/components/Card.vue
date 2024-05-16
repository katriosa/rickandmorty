<template>
  <div class="card">
    <h2>{{ item.name }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  item: Object,
});
</script>

<style scoped>
.card {
  border-radius: 10px;
  padding: 16px;
  margin: 8px;
  background-color: var(--color-card-background);
}
</style>
