// todo: try to do things like these with cypress?

// Run in a label's albums ('music') page to wishlist all albums.
async function wishlistAllAlbums() {
  var thisHost = window.location.host
  var albumUrls = [...document.querySelectorAll('.music-grid-item > a')].map(a => a.href)
  // console.log('albums', albums)
  for (var url of albumUrls) {
    var t = window.open(url, '_blank')
    if (!t) {
      console.warn('Could not open', url)
      continue
    }
    await new Promise((res) => setTimeout(res, 2500))
    // todo: properly await t opening using an event listener for 'load' or sth on t.window
    t.focus()
    if (new URL(url).hostname !== thisHost) {
      console.warn('Different host, so please check by yourself:', url)
      continue
    }
    var w = t.document.querySelector('.wishlist a')
    if (w) {
      w.click()
      await new Promise((res) => setTimeout(res, 1500))
      console.log('Wishlisted:', url)
      t.close()
    } else if (t.document.querySelector('.wishlisted')) {
      console.info('Already wishlisted:', url)
      t.close()
    } else {
      console.warn('Has no wishlist info:', url)
      continue
    }
  }
  console.log('Done!')
}

// Run in your wishlist page. It will go through the visible items and unwishlist the ones of which title/description match the passed pattern
// (todo: seems this one is somehow blocked for a cross-origin reason?)
async function unwishlistAlbumsWithPattern(ptn) {
  if (!ptn) return console.error('Please pass pattern')

  var albumUrls = [...document.querySelectorAll('.collection-item-container a')]
    .filter(a => !!a.innerHTML.match(ptn))
    .map(a => a.href)

  console.log('albums to unwishlist', albumUrls)

  for (var url of albumUrls) {
    var t = window.open(url, '_blank')
    await new Promise((res) => setTimeout(res, 2000))
    t.focus()
      var w = t.document.querySelector('.wishlisted a')
      if (w) {
        w.click()
        await new Promise((res) => setTimeout(res, 1500))
        console.log('Unwishlisted:', url)
      }
    t.close()
  }
  console.log('Done!')
}
