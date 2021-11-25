// ==UserScript==
// @name         LinkcoreLyricsEnters
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Formats linkcore lyrics to be easier to copy-paste
// @author       You
// @match        https://linkco.re/*
// @grant        none
// ==/UserScript==

(function() {
  var lyricsParent = document.querySelector('.lyric_text');
  var children = lyricsParent?.querySelectorAll('p');

  if (!children) {
    return;
  }
  console.log('Found lyrics');

  const groups = [...children].reduce((acc, c) => {
    if (c.innerHTML)
      acc[acc.length-1].push(c);
    else {
      acc.push([]);
    }

    lyricsParent.removeChild(c);

    return acc;
  }, [[]]);

  groups.forEach(g => {
    const p = document.createElement('p');
    lyricsParent.appendChild(p);
    g.forEach(c => {
      const sp = document.createElement('span');
      sp.innerHTML = c.innerHTML + '<br>';
      return p.appendChild(sp);
    });
  });
})();