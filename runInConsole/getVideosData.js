var items = document.querySelector('#items.ytd-grid-renderer')
var nodes = items.querySelectorAll('ytd-grid-video-renderer')
var data = [...nodes].map(n => ({
  title: n.querySelector('#video-title').innerText,
  thumb: n.querySelector('#img').src,
  link: n.querySelector('a#thumbnail').href,
})).reverse() // old to new
var dataString = JSON.stringify(data, null, 2);

// console.log(dataString);