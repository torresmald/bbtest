'use strict'
import { resultFooterName, resultFooterEpisodes, resultFooterQuotes, resultFooterDeaths } from "../api/callApiFooter.js";

export const createDivFooter = () => {
    const container$$ = document.querySelector('.footer__container');
    const pName$$ = document.createElement('p');
    pName$$.classList.add('footer__container_chars"')
    pName$$.textContent = (`Name: ${resultFooterName.length}`);
    container$$.appendChild(pName$$);
    const pQuotes$$ = document.createElement('p');
    pQuotes$$.classList.add('footer__container_quotes')
    pQuotes$$.textContent = (`Quotes: ${resultFooterQuotes.length}`);
    container$$.appendChild(pQuotes$$);
    const pDeaths$$ = document.createElement('p');
    pDeaths$$.classList.add('footer__container_deaths')
    pDeaths$$.textContent = (`Deaths: ${resultFooterDeaths.length}`);
    container$$.appendChild(pDeaths$$);
    const pEpisodes$$ = document.createElement('p');
    pEpisodes$$.classList.add('footer__container_episodes')
    pEpisodes$$.textContent = (`Episodes: ${resultFooterEpisodes.length}`);
    container$$.appendChild(pEpisodes$$);
}





