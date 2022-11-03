//* LLAMADA A LA API DE CHARACTERS PARA PINTARLOS POR PANTALLA EN CREATEDIVCHAR.JS
'use strict'
export const responseChars = await fetch('https://www.breakingbadapi.com/api/characters');
export const resultChars = await responseChars.json();