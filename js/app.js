// My javascript lives in here
'use strict';
console.log('My javascript is hooked up to my HTML');

var productID = [
  'bag',
  'banana',
  'boots',
  'chair',
  'cthulhu',
  'dragon',
  'pen',
  'scissors',
  'shark',
  'sweep',
  'unicorn',
  'usb-tentacle',
  'water-can',
  'wine-glass'
];

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

var imgPath = '<img src="images/products/'
var imgClose = '" />'

function Products(displayCount, clickCount, percentClick) {
  this.displayCount = displayCount;
  this.clickCount = clickCount;
  this.percentClick = percentClick;
}


var fetchImg1 = document.getElementById('imgContainer1');
var fetchImg2 = document.getElementById('imgContainer2');
var fetchImg3 = document.getElementById('imgContainer3');

var randImg1 = Math.floor(Math.random() * productImgs.length);
var randImg2 = Math.floor(Math.random() * productImgs.length);
var randImg3 = Math.floor(Math.random() * productImgs.length);

var countImg1 = 0;
var countImg2 = 0;
var countImg3 = 0;

function initialImg() {
  imgContainer1.innerHTML = imgPath + productImgs[randImg1] + imgClose;
  imgContainer2.innerHTML = imgPath + productImgs[randImg2] + imgClose;
  imgContainer3.innerHTML = imgPath + productImgs[randImg3] + imgClose;
}
initialImg();

fetchImg1.addEventListener('click', clickImg1);
fetchImg2.addEventListener('click', clickImg2);
fetchImg3.addEventListener('click', clickImg3);

function clickImg1() {
  console.log('It worked');
  var randImg1 = Math.floor(Math.random() * productImgs.length);
  console.log(randImg1);
  imgContainer1.innerHTML = imgPath + productImgs[randImg1] + imgClose;
  imgContainer2.innerHTML = imgPath + productImgs[randImg2] + imgClose;
  imgContainer3.innerHTML = imgPath + productImgs[randImg3] + imgClose;
}

function clickImg2() {
  console.log('It worked again');
  var randImg2 = Math.floor(Math.random() * productImgs.length);
  console.log(randImg2);
  imgContainer1.innerHTML = imgPath + productImgs[randImg1] + imgClose;
  imgContainer2.innerHTML = imgPath + productImgs[randImg2] + imgClose;
  imgContainer3.innerHTML = imgPath + productImgs[randImg3] + imgClose;
}

function clickImg3() {
  console.log('It worked a ');
  var randImg3 = Math.floor(Math.random() * productImgs.length);
  console.log(randImg3);
  imgContainer1.innerHTML = imgPath + productImgs[randImg1] + imgClose;
  imgContainer2.innerHTML = imgPath + productImgs[randImg2] + imgClose;
  imgContainer3.innerHTML = imgPath + productImgs[randImg3] + imgClose;
}
