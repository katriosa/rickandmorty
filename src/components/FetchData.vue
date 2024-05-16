<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="data">
      <Pagination
        :info="data.info"
        :currentPage="currentPage"
        @pageChange="fetchData"
      />
      <ul class="list">
        <li class="card-container" v-for="item in data.results" :key="item.id">
          <Card :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Card from "./Card.vue";
import Pagination from "./Pagination.vue";

export default {
  components: {
    Card,
    Pagination,
  },
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const currentPage = ref(1);

    const fetchData = async (page = 1) => {
      loading.value = true;
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        data.value = responseData;
        currentPage.value = page;
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      loading,
      error,
      fetchData,
      currentPage,
    };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.card-container {
  max-width: 600px;
  width: 100%;
}
</style>
