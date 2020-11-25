import { translateToEnglish, translateToSpanish, translateToFrench, translateToLatin } from "./translate.js";

const toEnglishBtn = document.querySelector('.translate-to-english');
const toSpanishBtn = document.querySelector('.translate-to-spanish');
const toFrenchBtn = document.querySelector('.translate-to-french');
const toLatinBtn = document.querySelector('.translate-to-latin');

const englishTranslator = document.querySelector('.english-translator')
const englishOutput = document.querySelector('.english-output');

toEnglishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputText = englishTranslator.englishTranslation.value
    englishOutput.innerHTML = translateToEnglish(inputText);
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

