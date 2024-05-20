<template>
  <div class="filter-container">
    <input
      class="nameFilter"
      v-model="nameFilter"
      placeholder="Filter by name"
    />
    <select class="statusFilter" v-model="statusFilter">
      <option value="">All</option>
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="Unknown">Unknown</option>
    </select>
    <button @click="applyFilter">Apply</button>
  </div>
</template>

<script setup>
import { useFilterFetch } from "@/api/useFilterFetch";
import { ref, watchEffect } from "vue";

const nameFilter = ref("");
const statusFilter = ref("");
const emit = defineEmits(["filterApplied"]);

const {
  filteredData,
  loading: loadingFilter,
  currentPage: currentFiltredPage,
  fetchFilterCharacters,
  error: errorFilter,
} = useFilterFetch();

watchEffect(() => {
  if (filteredData.value) {
    const filterResult = {
      filteredData: filteredData.value,
      loadingFilter: loadingFilter.value,
      currentFiltredPage: currentFiltredPage.value,
      errorFilter: errorFilter.value,
      fetchFilterCharacters,
    };
    emit("filterApplied", filterResult);
  }
});

const applyFilter = () => {
  if (!nameFilter.value && !statusFilter.value) return;

  const appliedFilters = {};
  if (nameFilter.value) {
    appliedFilters.name = nameFilter.value;
  }
  if (statusFilter.value) {
    appliedFilters.status = statusFilter.value;
  }
  const firstPage = 1;
  fetchFilterCharacters(firstPage, appliedFilters);
};
</script>

<style scoped>
.filter-container {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.nameFilter,
.statusFilter {
  padding-left: 10px;
  font-size: 1rem;
}
</style>
