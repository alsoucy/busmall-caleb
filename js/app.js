// My javascript lives in here
'use strict';
console.log('My javascript is hooked up to my HTML');

var productImgs = [
  'bag.jpg',
  'banana.jpg',
  'boots.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dragon.jpg',
  'pen.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];

var fetchImg1 = document.getElementById('imgContainer1');

fetchImg1.addEventListener('click', clickImg1);

function clickImg1() {
  console.log('It worked');
  var randImg1 = Math.floor(Math.random() * productImgs.length);
  console.log(randImg1);
  imgContainer1.innerHTML = '<img src="images/products/' + productImgs[randImg1] + '" />';
}
