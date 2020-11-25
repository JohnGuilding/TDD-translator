import { translateToEnglish, translateToSpanish, translateToFrench, translateToLatin } from "./translate.js";

const toEnglishBtn = document.querySelector('.translate-to-english');
const toSpanishBtn = document.querySelector('.translate-to-spanish');
const toFrenchBtn = document.querySelector('.translate-to-french');
const toLatinBtn = document.querySelector('.translate-to-latin');

toEnglishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    translateToEnglish();
});

toSpanishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    translateToSpanish();
})

toFrenchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    translateToFrench();
})

toLatinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    translateToLatin();
})

