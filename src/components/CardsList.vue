<template>
  <ul class="list">
    <li class="card-container" v-for="item in cards" :key="item.id">
      <CharacterCard :characterData="item" />
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
import CharacterCard from "./characterCard/CharacterCard.vue";

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
  gap: 20px;
  margin-top: 20px;
}
.card-container {
  max-width: 600px;
  width: 100%;
}
@media (max-width: 660px) {
  .list {
    padding: 0 4rem;
  }
}
@media (max-width: 500px) {
  .list {
    padding: 0;
  }
}
</style>
