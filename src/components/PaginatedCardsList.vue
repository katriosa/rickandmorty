<template>
  <div>
    <!-- <div v-if="loadingPaginatedFetch">Loading...</div> -->
    <div v-if="errorPaginatedFetch">{{ errorPaginatedFetch }}</div>
    <div v-if="errorEpisodeFetch">{{ errorEpisodeFetch }}</div>

    <div v-if="(characterData || filteredData) && episodesData">
      <PaginationControls
        :paginationInfo="
          filteredDataExists ? filteredData.info : characterData.info
        "
        :currentPage="filteredDataExists ? currentFiltredPage : currentPage"
        @pageChange="handlePageChange"
      />
      <CardsList
        :cards="
          filteredDataExists ? filteredData.results : characterData.results
        "
        :episodes="episodesData"
      />
      <PaginationControls
        :paginationInfo="
          filteredDataExists ? filteredData.info : characterData.info
        "
        :currentPage="filteredDataExists ? currentFiltredPage : currentPage"
        @pageChange="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import { usePaginatedFetch } from "../api/usePaginatedFetch.js";
import { useEpisodeFetch } from "../api/useEpisodeFetch.js";
import CardsList from "./CardsList.vue";
import PaginationControls from "./PaginationControls.vue";
import { getFirstApperianceEpisodes } from "../utils/getFirstApperianceEpisodes.js";

const props = defineProps({
  filterResult: Object,
});

const filteredData = ref(null);
const loadingFilter = ref(false);
const currentFiltredPage = ref(1);
const errorFilter = ref(null);
const filteredDataExists = ref(false);

watch(
  () => props.filterResult,
  (newVal) => {
    if (newVal) {
      filteredData.value = newVal.filteredData;
      loadingFilter.value = newVal.loadingFilter;
      currentFiltredPage.value = newVal.currentFiltredPage;
      errorFilter.value = newVal.errorFilter;

      filteredDataExists.value = true;

      const episodeNumberAppearance = getFirstApperianceEpisodes(
        newVal.filteredData.results
      );
      fetchEpisodes(episodeNumberAppearance);
    }
  }
);

const {
  characterData,
  loadingPaginatedFetch,
  errorPaginatedFetch,
  currentPage,
  fetchPage,
} = usePaginatedFetch();

const { episodesData, errorEpisodeFetch, fetchEpisodes } = useEpisodeFetch();

onMounted(() => {
  fetchPage();
});

watch(characterData, (newCharacterData) => {
  if (newCharacterData) {
    const episodeNumberAppearance = getFirstApperianceEpisodes(
      newCharacterData.results
    );
    fetchEpisodes(episodeNumberAppearance);
  }
});

function handlePageChange(newPage) {
  if (filteredDataExists.value) {
    props.filterResult.fetchFilterCharacters(newPage);
  } else {
    fetchPage(newPage);
  }
}
</script>
