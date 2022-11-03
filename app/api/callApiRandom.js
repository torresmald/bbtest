//* LLAMADA A LA API DE CHARACTERS PARA PINTARLOS POR PANTALLA EN CREATEDIVRANDOM.JS
'use strict'
export const responseRandom = await fetch('https://www.breakingbadapi.com/api/character/random');
export const resultRandom = await responseRandom.json();