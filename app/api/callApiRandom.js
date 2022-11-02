export const responseRandom = await fetch('https://www.breakingbadapi.com/api/character/random');
export const resultRandom = await responseRandom.json();