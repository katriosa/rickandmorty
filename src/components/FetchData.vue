<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="data">
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

export default {
  components: {
    Card,
  },
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character?page=1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        data.value = responseData;
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
