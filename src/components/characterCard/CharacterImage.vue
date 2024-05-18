<template>
  <div class="image-container">
    <img :src="characterImage" />
  </div>
</template>

<script setup>
const props = defineProps({
  characterImage: String,
});
</script>

<style scoped>
.image-container {
  max-width: 230px;
  width: 100%;
  height: 220px;
}

.image-container img {
  width: 100%;
  display: block;
  height: 100%;
  object-position: center;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

@media (max-width: 660px) {
  .image-container {
    max-width: none;
  }
}
</style>
