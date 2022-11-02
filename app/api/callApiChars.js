export const responseChars = await fetch('https://www.breakingbadapi.com/api/characters');
export const resultChars = await responseChars.json();