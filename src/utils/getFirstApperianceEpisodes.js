export function getFirstApperianceEpisodes(charactersData) {
  const firstEpisodeNumbers = [];
  charactersData.map((characterData) => {
    let firstEpisode;
    const characterEpisodes = characterData.episode;
    const episodeNumbers = [];
    characterEpisodes.map((episodeUrl) => {
      const episodeNumber = episodeUrl.split("/").slice(-1)[0];
      episodeNumbers.push(episodeNumber);
    });

    if (characterEpisodes.length > 0) {
      firstEpisode = Math.min(...episodeNumbers);
    } else {
      firstEpisode = numEpisodes[0];
    }
    firstEpisodeNumbers.push(firstEpisode);
  });
  return firstEpisodeNumbers;
}
