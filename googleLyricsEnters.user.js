// ==UserScript==
// @name         GoogleLyricsEnter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Puts extra enters after paragraphs in lyrics preview in Google
// @author       You
// @match        https://*.google.com/search
// @grant        none
// ==/UserScript==

(function() {
  document.addEventListener('load', () => {
    console.log('page load');
    var lyricsTopParent = document.querySelector('data-attrid="kc:/music/recording_cluster:lyrics"')
    console.log('top parent', lyricsTopParent)
    var lyricsParent = lyricsTopParent?.querySelector('div > div > div > div > div:nth-child(2)')
    console.log('parent', lyricsParent)
    var children = lyricsParent?.querySelectorAll('div')

    if (!children)
      return;

    children.forEach(c => {
      console.log('c', c)
      var empt = document.createElement('span')
      empt.innerHTML = '\n'
      c.appendChild(empt)
    })
  })
})();