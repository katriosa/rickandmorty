<template>
  <div>
    <button @click="goToPrevPage" :disabled="!prevPageLink">Prev</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="goToNextPage" :disabled="!nextPageLink">Next</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  paginationInfo: {
    type: Object,
  },
  currentPage: {
    type: Number,
  },
});

const emitPageChange = defineEmits(["page-change"]);

const totalPages = ref(props.paginationInfo.pages || 1);
const nextPageLink = ref(props.paginationInfo.next || null);
const prevPageLink = ref(props.paginationInfo.prev || null);

watch(
  () => props.paginationInfo,
  (newValue) => {
    totalPages.value = newValue.pages;
    nextPageLink.value = newValue.next;
    prevPageLink.value = newValue.prev;
  }
);

const goToPrevPage = () => {
  if (prevPageLink) {
    emitPageChange("page-change", props.currentPage - 1);
  }
};

const goToNextPage = () => {
  if (nextPageLink) {
    emitPageChange("page-change", props.currentPage + 1);
  }
};
</script>
