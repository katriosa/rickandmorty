<template>
  <div>
    <button @click="prevPage" :disabled="!prevPageLink">Prev</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="!nextPageLink">Next</button>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const totalPages = ref(props.info.pages || 1);
    const nextPageLink = ref(props.info.next || null);
    const prevPageLink = ref(props.info.prev || null);

    watch(
      () => props.info,
      (newValue) => {
        totalPages.value = newValue?.pages || 1;
        nextPageLink.value = newValue.next;
        prevPageLink.value = newValue.prev;
      }
    );

    const prevPage = () => {
      if (props.currentPage > 1) {
        emit("page-change", props.currentPage - 1);
      }
    };

    const nextPage = () => {
      if (props.currentPage < totalPages.value) {
        emit("page-change", props.currentPage + 1);
      }
    };

    return {
      totalPages,
      prevPage,
      nextPage,
      nextPageLink,
      prevPageLink,
    };
  },
};
</script>
