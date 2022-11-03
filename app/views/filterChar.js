import {resultChars } from "../api/callApiChars.js";


const input$$ = document.querySelector('input');
const button$$ = document.querySelector('button');
export const devolverNombre = () => {
    const filtrado = resultChars.filter((personaje) => {
        return personaje.name.toLowerCase().includes(input$$.value)
    })
    const main$$ = document.querySelector('.main');
    const section$$ = document.createElement('section');
    section$$.classList.add('section');
    main$$.appendChild(section$$);
    const div$$ = document.createElement('div');
    div$$.classList.add('divContainerRandom');
    section$$.appendChild(div$$);
    const paintFilteredChar = () => {
        for (let item of filtrado) {
            const srcImg = item.img;
            const newImg = document.createElement('img');
            newImg.src = srcImg;
            div$$.appendChild(newImg);
            const pID$$ = document.createElement('p');
            const idChar = item.char_id;
            pID$$.textContent = `ID: ${idChar}`;
            div$$.appendChild(pID$$)
            const pName$$ = document.createElement('p');
            const name = item.name;
            pName$$.textContent = `Nombre: ${name}`;
            div$$.appendChild(pName$$);
            const pNickName$$ = document.createElement('p');
            const nickName = item.nickname;
            pNickName$$.textContent = `Nick: ${nickName}`;
            div$$.appendChild(pNickName$$)
            const pOcupation$$ = document.createElement('p');
            const ocupation = item.occupation;
            pOcupation$$.textContent = `Ocupation: ${ocupation}`;
            div$$.appendChild(pOcupation$$);
            const pAlive$$ = document.createElement('p');
            const alive = item.status;
            pAlive$$.textContent = `Status: ${alive}`;
            div$$.appendChild(pAlive$$);
        }
    }
    paintFilteredChar();
}

const buttonEventListener = button$$.addEventListener('click', devolverNombre);