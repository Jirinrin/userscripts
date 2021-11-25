// ==UserScript==
// @name         LinkcoreLyricsEnters
// @namespace    http://tampermonkey.net/
// @version      0.3
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
    console.log(c.innerHTML);
    if (c.innerHTML)
      acc[acc.length-1].push(c);
    else {
      acc.push([]);
    }

    lyricsParent.removeChild(c);

    return acc;
  }, [[]]);
  console.log('groups', groups)

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