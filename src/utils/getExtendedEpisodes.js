export const getExtendedEpisodes = (episodeNumbers, initialEpisodes) => {
  const extendedEpisodes = [];
  if (episodeNumbers.length !== initialEpisodes.length) {
    episodeNumbers.map((episodeNum) => {
      const responseDataEpisode = initialEpisodes.find(
        (episodeInfo) => episodeInfo.id === episodeNum
      );
      extendedEpisodes.push(responseDataEpisode);
    });
  } else {
    extendedEpisodes = initialEpisodes;
  }
  return extendedEpisodes;
};
