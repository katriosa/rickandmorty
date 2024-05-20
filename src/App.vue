<template>
  <MainHeader />
  <FilterCharacters @filterApplied="handleFilterApplied" />
  <PaginatedCardsList :filterResult="filterResult" />
</template>

<script setup>
import PaginatedCardsList from "./components/PaginatedCardsList.vue";
import MainHeader from "./components/MainHeader.vue";
import FilterCharacters from "./components/FilterCharacters.vue";
import { ref } from "vue";

const filterResult = ref({
  filteredData: null,
  loadingFilter: false,
  currentFiltredPage: 1,
  errorFilter: null,
});

const handleFilterApplied = (data) => {
  filterResult.value = data;
};
</script>
