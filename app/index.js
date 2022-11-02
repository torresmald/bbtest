//! ENDPOINT https://www.breakingbadapi.com/api/
//! ENDPOINT CHARACTERS https://www.breakingbadapi.com/api/characters
//! ENDPOINT RANDOM https://www.breakingbadapi.com/api/characters/random
'use strict'
import {createDivChar} from "./views/createDivChar.js";
import {createDivRandom} from "./views/createDivRandom.js";
import {createDivFooter} from "./views/createDivFooter.js";
import { resultFooterName, resultFooterQuotes, responseFooterEpisodes, responseFooterDeaths } from "./api/callApiFooter.js";

const imgChars$ = document.querySelector('.imgChars');
const showChars = imgChars$.addEventListener('click', () => {
    createDivChar();
})
const imgRandom$ = document.querySelector('.imgRandom');
const showRandom = imgRandom$.addEventListener('click', () => {
    createDivRandom();
    setTimeout(() =>{
        location.reload();
    }, 8000)
})

console.log(responseFooterDeaths)
createDivFooter();



