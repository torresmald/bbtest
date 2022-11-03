//* LLAMADAS A LA API DE CADA ENDPOINT PARA PINTAR EN EL FOOTER CADA ARRAY
'use strict'
const responseFooterName = await fetch('https://breakingbadapi.com/api/characters');
export const resultFooterName = await responseFooterName.json();

const responseFooterEpisodes = await fetch('https://breakingbadapi.com/api/episodes');
export const resultFooterEpisodes = await responseFooterEpisodes.json();

const responseFooterQuotes = await fetch('https://breakingbadapi.com/api/quotes');
export const resultFooterQuotes = await responseFooterQuotes.json();

const responseFooterDeaths = await fetch('https://breakingbadapi.com/api/deaths');
export const resultFooterDeaths = await responseFooterDeaths.json();
