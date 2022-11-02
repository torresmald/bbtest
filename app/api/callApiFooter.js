export const responseFooterName = await fetch('https://breakingbadapi.com/api/characters');
export const resultFooterName = await responseFooterName.json();
export const responseFooterEpisodes = await fetch('https://breakingbadapi.com/api/episodes');
export const resultFooterEpisodes = await responseFooterEpisodes.json();
export const responseFooterQuotes = await fetch('https://breakingbadapi.com/api/quotes');
export const resultFooterQuotes = await responseFooterQuotes.json();
export const responseFooterDeaths = await fetch('https://breakingbadapi.com/api/deaths');
export const resultFooterDeaths = await responseFooterDeaths.json();
