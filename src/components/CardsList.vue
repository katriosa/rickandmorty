<template>
  <ul class="list">
    <li class="card-container" v-for="item in cards" :key="item.id">
      <Card :item="item" />
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
import Card from "./Card.vue";

const props = defineProps({
  cards: Array,
});
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.card-container {
  max-width: 600px;
  width: 100%;
}
</style>
