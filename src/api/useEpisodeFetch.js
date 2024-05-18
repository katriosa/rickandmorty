import { getExtendedEpisodes } from "../utils/getExtendedEpisodes";
import { ref } from "vue";

export function useEpisodeFetch() {
  const episodesData = ref(null);
  const error = ref(null);

  const fetchEpisodes = async (episodeNumbers) => {
    try {
      const episodesString = episodeNumbers.join(",");
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodesString}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch episodes data");
      }
      const responseData = await response.json();

      const extendedEpisodes = getExtendedEpisodes(
        episodeNumbers,
        responseData
      );
      episodesData.value = extendedEpisodes;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { episodesData, error, fetchEpisodes };
}
