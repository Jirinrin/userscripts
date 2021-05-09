/**
 * To be used for https://dschep.github.io/imgur-album-downloader
 * Because for large collections chrome will run out of memory so you have to split it up
 */

var ul = document.querySelector('.clearfix')
var lis = [...ul.querySelectorAll('li')]
var clickAll = h => h.forEach(l => l.querySelector('input').click())

var half1 = lis.slice(0, Math.ceil(lis.length/2))
var half2 = lis.slice(Math.ceil(lis.length/2), lis.length)

clickAll(half1)