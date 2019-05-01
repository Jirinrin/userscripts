// ==UserScript==
// @name        Kaniwani Mistake Delay
// @namespace   WKMistakeDelay
// @description Disables 'Enter' for one second after making a mistake.
// @include     https://kaniwani.com/reviews/session*
// @include     https://kaniwani.com/reviews/session*
// @version     0.0.1
// ==/UserScript==


const msDelay = 1000;

/* Incorrect Last Answer Booleans */
const incorrectLastAnswer = false;
const blockDisabledChange = false;

let form = document.querySelector('form');

console.log(form);

// form.addEventListener('submit', () => {
//   console.log('hi')
// });
