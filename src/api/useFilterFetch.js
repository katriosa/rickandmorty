import { getFilterQueryString } from "@/utils/getFilterQueryString";
import { ref } from "vue";

export function useFilterFetch() {
  const filteredData = ref(null);
  const error = ref(null);
  const loading = ref(false);
  const currentPage = ref(1);
  let filterParamsExist = null;

  const fetchFilterCharacters = async (page, filterParams) => {
    loading.value = true;

    if (filterParams) {
      filterParamsExist = filterParams;
    }

    const queryString = getFilterQueryString(filterParams || filterParamsExist);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&${queryString}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch filter data");
      }
      const responseData = await response.json();
      filteredData.value = responseData;
      currentPage.value = page;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  return { filteredData, loading, currentPage, fetchFilterCharacters, error };
}
