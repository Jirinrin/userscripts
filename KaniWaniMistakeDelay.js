// ==UserScript==
// @name         Kaniwani Mistake Delay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disables 'Enter' for one second after making a mistake.
// @author       You
// @match        https://kaniwani.com/reviews/session*
// @grant        none
// ==/UserScript==


(function() {
  'use strict';

  const msDelay = 1000;

  const RED = 'rgb(226, 50, 91)';

  let inputField;


  setTimeout(() => {
    inputField = document.querySelector('form > div');

    inputField.addEventListener('change', e => {
      setTimeout(() => {

        if (window.getComputedStyle(inputField).backgroundColor === RED) {
          window.addEventListener('keydown',  disableSubmit, true);
          setTimeout(() => {
            window.removeEventListener('keydown',  disableSubmit, true);
          }, msDelay);
        }

      }, 0)
    });

  }, 2000);

  function disableSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
  }
})();
