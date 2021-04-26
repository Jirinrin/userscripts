// ==UserScript==
// @name         HotmailAutoBandcampDownloads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  On a certain keypress, automatically opens all the bandcamp download links in your inbox
// @author       You
// @match        https://outlook.live.com/mail/*
// @grant        none
// ==/UserScript==

// const KEYS = {
//   'ctrl': 'CONTROL',
//   'B':    'b',
// };

(function() {
  'use strict';

  document.addEventListener('keydown', e => {
    // Hotkey: Ctrl+B
    if (e.key === 'b' && e.ctrlKey)
      openBandcampLinks();

    // console.log(e);

  }, false);
})();

function openBandcampLinks() {
const divs = document.getElementsByTagName('div');

const downloadLinks =
  Object.values(divs)
    .map(div => {
      const ariaLabel = div.getAttribute('aria-label');
      if (ariaLabel && ariaLabel.includes('Your download from')) {
        return ariaLabel
          .split(' ')
          .find(strPart => strPart.includes('bandcamp.com/download'))
          .trim();
      }
      return null;
    })
    .filter(text => !!text);

console.log(downloadLinks);

downloadLinks.forEach((url, i) => window.open(url, '_blank'));
}