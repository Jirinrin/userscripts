async function wishlistAllAlbums() {
  var albums = [...document.querySelectorAll('.music-grid-item > a')].map(a => a.href)
  // console.log('albums', albums)
  var tabs = []
  for (var url of albums) {
    var t = window.open(url, '_blank')
    tabs.push(url, t)
    // console.log('t', t)
    await new Promise((res) => setTimeout(res, 2000))
    t.focus()
      var w = t.document.querySelector('.wishlist a')
      if (w) {
        w.click()
        await new Promise((res) => setTimeout(res, 1500))
      }
    t.close()
  }

  return tabs
}
