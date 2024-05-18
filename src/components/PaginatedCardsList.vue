<template>
  <div>
    <div v-if="loadingPaginatedFetch">Loading...</div>
    <div v-if="errorPaginatedFetch">{{ errorPaginatedFetch }}</div>
    <div v-if="errorEpisodeFetch">{{ errorEpisodeFetch }}</div>
    <div v-if="characterData && episodesData">
      <PaginationControls
        :paginationInfo="characterData.info"
        :currentPage="currentPage"
        @pageChange="fetchPage"
      />
      <CardsList :cards="characterData.results" :episodes="episodesData" />
      <PaginationControls
        :paginationInfo="characterData.info"
        :currentPage="currentPage"
        @pageChange="fetchPage"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { usePaginatedFetch } from "../api/usePaginatedFetch.js";
import { useEpisodeFetch } from "../api/useEpisodeFetch.js";
import CardsList from "./CardsList.vue";
import PaginationControls from "./PaginationControls.vue";
import { getFirstApperianceEpisodes } from "../utils/getFirstApperianceEpisodes.js";

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
</script>
