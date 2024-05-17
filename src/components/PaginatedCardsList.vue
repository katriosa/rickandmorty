<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="characterData">
      <PaginationControls
        :paginationInfo="characterData.info"
        :currentPage="currentPage"
        @pageChange="fetchPage"
      />
      <CardsList :cards="characterData.results" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { usePaginatedFetch } from "../api/usePaginatedFetch.js";
import CardsList from "./CardsList.vue";
import PaginationControls from "./PaginationControls.vue";

const { characterData, loading, error, currentPage, fetchPage } =
  usePaginatedFetch();
onMounted(() => {
  fetchPage();
});
</script>
