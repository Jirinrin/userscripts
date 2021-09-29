// ==UserScript==
// @name         GoogleLyricsEnter
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Puts extra enters after paragraphs in lyrics preview in Google
// @author       You
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==

(function() {
  var lyricsTopParent = document.querySelector('[data-attrid="kc:/music/recording_cluster:lyrics"]');
  var lyricsParent = lyricsTopParent?.querySelector('div > div > div > div > div:nth-child(2)');
  var children = lyricsParent?.querySelectorAll('div');

  if (!children) {
    return;
  }
  console.log('Found lyrics');

  children.forEach(c => {
    var empt = document.createElement('span');
    empt.innerHTML = '<br></br>';
    c.appendChild(empt);
  })
})();