// My javascript lives in here
'use strict';
console.log('My javascript is hooked up to my HTML');

// Maybe using this array later?
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

// This array contains the file names that populate in my image file paths
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

// Records log of impressions
var displayCounterImg1 = [];
var displayCounterImg2 = [];
var displayCounterImg3 = [];

// Records log of clicks
var clickCounterImg1 = [];
var clickCounterImg2 = [];
var clickCounterImg3 = [];

var totalClickCounter = 0

var imgPath = '<img src="images/products/'
var imgClose = '" />'

function FocusGroupData(displayCount, clickCount, percentClick) {
  this.displayCount = [];
  this.clickCount = [];
  this.percentClick = percentClick;
}

var fetchImg1 = document.getElementById('imgContainer1');
var fetchImg2 = document.getElementById('imgContainer2');
var fetchImg3 = document.getElementById('imgContainer3');
var imgSection = document.getElementById('imgContainer');

var countImg1 = 0;
var countImg2 = 0;
var countImg3 = 0;

fetchImg1.addEventListener('click', clickImg1);
fetchImg1.addEventListener('click', logTotalClicks);
fetchImg2.addEventListener('click', clickImg2);
fetchImg2.addEventListener('click', logTotalClicks);
fetchImg3.addEventListener('click', clickImg3);
fetchImg3.addEventListener('click', logTotalClicks);
imgSection.addEventListener('click', genDataButton);

function randoImage() {
  return Math.floor(Math.random() * productImgs.length);
}

function initialImg() {
  var randomizer1 = randoImage()
  displayCounterImg1.push(randomizer1);
  imgContainer1.innerHTML = imgPath + productImgs[randomizer1] + imgClose;

  var randomizer2 = randoImage()
  while (randomizer2 === randomizer1 || randomizer2 === randomizer3) {
    var randomizer2 = randoImage();
  }
  displayCounterImg2.push(randomizer2);
  imgContainer2.innerHTML = imgPath + productImgs[randomizer2] + imgClose;

  var randomizer3 = randoImage()
  while (randomizer3 === randomizer1 || randomizer3 === randomizer2) {
    var randomizer3 = randoImage();
  }
  displayCounterImg3.push(randomizer3);
  imgContainer3.innerHTML = imgPath + productImgs[randomizer3] + imgClose;

  // if (randomizer1 === randomizer2 || randomizer1 === randomizer3 || randomizer2 === randomizer3) {
  //   console.log('I need to fix this!');
  // }
}
initialImg();

function clickImg1() {
  initialImg();
  var clickBait1 = displayCounterImg1[displayCounterImg1.length - 2];
  clickCounterImg1.push(clickBait1);
  console.log(clickCounterImg1);
}

function clickImg2() {
  initialImg();
  var clickBait2 = displayCounterImg2[displayCounterImg2.length - 2];
  clickCounterImg2.push(clickBait2);
  console.log(clickCounterImg2);
}

function clickImg3() {
  initialImg();
  var clickBait3 = displayCounterImg3[displayCounterImg3.length - 2];
  clickCounterImg3.push(clickBait3);
  console.log(clickCounterImg3);
}

function logTotalClicks() {
  totalClickCounter += 1;
  console.log(totalClickCounter);
}

// Function is set to generate button after just 3 clicks (until testing is complete)
function genDataButton() {
  if (totalClickCounter > 2) {
    console.log('Congratulations, You\'ve clicked on 15 or more images!');
    // Find the section in index.html where the button will appear
    var buttonContent = document.getElementById('dataButtonContainer');
    // Populate the section with a paragraph of text and a button
    buttonContent.innerHTML = '<p>Wanna see your results?</p><br><button id="clickMeData">CLICK HERE!</button>';
    // Create a variable to locate the button by its id
    var genUserData = document.getElementById('clickMeData');
    // Add an event listener to call the function to render data on the page when the button is clicked
    genUserData.addEventListener('click', renderDataTable);
  }
}

function renderDataTable() {
  var fetchTableEl = document.getElementById('userDataTable');
  fetchTableEl.innerHTML = '<h2>BWAHAHAHA, You were expecting <em>DATA</em>, chump?</h2>';
}
