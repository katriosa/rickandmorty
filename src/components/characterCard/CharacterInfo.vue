<template>
  <div class="text-container">
    <div>
      <h2 class="character-name">{{ characterName }}</h2>
      <p class="highlighted-info">
        <span class="status-icon">{{ statusIcon }}</span
        >{{ characterStatus }} - {{ characterSpesies }}
      </p>
    </div>
    <div>
      <h4>Last known location:</h4>
      <p class="highlighted-info">{{ characterLocation }}</p>
    </div>
    <div>
      <h4>First seen in:</h4>
      <p class="highlighted-info">{{ characterEpisode }}</p>
    </div>
  </div>
</template>

<script setup>
import { getStatusIcon } from "../../utils/getStatusIcon.js";

const props = defineProps({
  characterName: String,
  characterStatus: String,
  characterSpesies: String,
  characterLocation: String,
  characterEpisode: String,
});

const statusIcon = getStatusIcon(props.characterStatus);
</script>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}
.character-name {
  color: var(--color-heading);
  font-weight: bold;
  font-size: 1.5rem;
}
.highlighted-info {
  color: var(--color-heading);
}
.status-icon {
  margin-right: 10px;
}
@media (max-width: 660px) {
  .text-container {
    padding-left: 1rem;
    padding-bottom: 1rem;
  }
}
</style>
