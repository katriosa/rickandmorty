import { ref } from "vue";

export function usePaginatedFetch() {
  const characterData = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const currentPage = ref(1);

  const fetchPage = async (page = 1) => {
    loading.value = true;
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      characterData.value = responseData;
      currentPage.value = page;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  return { characterData, loading, error, currentPage, fetchPage };
}
