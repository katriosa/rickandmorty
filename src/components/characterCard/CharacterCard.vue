<template>
  <div class="card">
    <CharacterImage :characterImage="characterData.image" />
    <CharacterInfo
      :characterName="characterData.name"
      :characterStatus="characterData.status"
      :characterSpesies="characterData.species"
      :characterLocation="characterData.location.name"
      :characterEpisodes="characterData.episode"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import CharacterImage from "./CharacterImage.vue";
import CharacterInfo from "./CharacterInfo.vue";

const props = defineProps({
  characterData: Object,
});
</script>

<style scoped>
.card {
  border-radius: 10px;
  background-color: var(--color-card-background);
  display: flex;
  gap: 1rem;
}

@media (max-width: 660px) {
  .card {
    flex-direction: column;
  }
}
</style>
