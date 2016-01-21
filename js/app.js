// My javascript lives in here
'use strict';

// This array contains the names that populate in my image file paths
var productID = ['Bag', 'Banana', 'Boots', 'Chair', 'Cthulhu', 'Dragon', 'Pen', 'Scissors', 'Shark', 'Sweep', 'Unicorn', 'USB Tentacle', 'Water Can', 'Wine Glass'];

// This array contains the file names that populate in my image file paths
var productImgs = ['bag.jpg', 'banana.jpg', 'boots.jpg', 'chair.jpg', 'cthulhu.jpg', 'dragon.jpg', 'pen.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

// The 'allProducts' array will be dynamically populated with data via constructor Function "Products"
var allProducts = [];
var totalClickCounter = 0;
var imgPath = '<img src="images/products/';
var imgClose = '" />';

function Products(name, filePath, percentClick) {
  this.name = name;
  this.filePath = filePath;
  this.impressions = 0;
  this.clicks = 0;

  // data.labels.push(productID);
  // data.datasets[0].data.push(0);
  // allProducts.push(this);

}

for (var i = 0; i < productImgs.length; i++) {
  allProducts.push(new Products(productID[i], productImgs[i]));
}

var fetchImg1 = document.getElementById('imgContainer1');
var fetchImg2 = document.getElementById('imgContainer2');
var fetchImg3 = document.getElementById('imgContainer3');
var imgSection = document.getElementById('imgContainer');

fetchImg1.addEventListener('click', handleClickImg1);
fetchImg2.addEventListener('click', handleClickImg2);
fetchImg3.addEventListener('click', handleClickImg3);

function handleClickImg1() {
  console.log('One was clicked');
  clickImg1();
  logTotalClicks();
}

function handleClickImg2() {
  console.log('Two was clicked');
  clickImg2();
  logTotalClicks();
}

function handleClickImg3() {
  console.log('Three was clicked');
  clickImg3();
  logTotalClicks();
}

imgSection.addEventListener('click', genDataButton);

// Random number generator that can be called in multiple functions later
function randoImage() {
  return Math.floor(Math.random() * productImgs.length);
}

// Setting the variables for the randomizers outside of the function
// This is a bit of cheezy solution, but will function for the purposes of this project
var randomizer1, randomizer2, randomizer3;

// Function for displaying 3 random images in HTML (and tracking impressions)
function initialImg() {
  randomizer1 = randoImage()
  imgContainer1.innerHTML = imgPath + allProducts[randomizer1].filePath + imgClose;
  allProducts[randomizer1].impressions++;

  randomizer2 = randoImage()
  while (randomizer2 === randomizer1) {
    randomizer2 = randoImage();
  }
  imgContainer2.innerHTML = imgPath + allProducts[randomizer2].filePath + imgClose;
  allProducts[randomizer2].impressions++;

  randomizer3 = randoImage()
  while (randomizer3 === randomizer1 || randomizer3 === randomizer2) {
    randomizer3 = randoImage();
  }
  imgContainer3.innerHTML = imgPath + allProducts[randomizer3].filePath + imgClose;
  allProducts[randomizer3].impressions++;
}
initialImg();

// This function handles pushing tallied clicks on images into 'clicks' array
var clicksArrayForChart = [];
function makeMahClicksArray() {
  clicksArrayForChart = [];
  for (var i = 0; i < allProducts.length; i++) {
    clicksArrayForChart.push(allProducts[i].clicks);
  }
}

// This set of functions governs app behavior when images are clicked
function clickImg1() { // Called by handler for image 1
  // Tally the click on an image
  // In other words, allProducts[our random index number].clicks += 1
  // The variable 'clicks' goes up one for the product referenced in the master product array
  allProducts[randomizer1].clicks += 1;
  // The function 'makeMahClicksArray' handles pushing tallied clicks on images into 'clicks' array
  makeMahClicksArray();
  // Refreshes image after click event (and after previous code has run)
  initialImg();
}

function clickImg2() { // Called by handler for image 2
  allProducts[randomizer2].clicks += 1;
  makeMahClicksArray();
  initialImg();
}

function clickImg3() { // Called by handler for image 3
  allProducts[randomizer3].clicks += 1;
  makeMahClicksArray();
  initialImg();
}

// Keeps track of total image clicks in a global variable.
// My dynamic button-displaying function depends on this function.
function logTotalClicks() {
  totalClickCounter += 1;
  console.log(totalClickCounter);
}

// Function is set to generate button after just 4 clicks (until testing is complete)
function genDataButton() {
  if (totalClickCounter > 6) {
    console.table(allProducts);
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

// This function renders data chart visible to user in HTML when user clicks button
function renderDataTable() {
  var fetchTableEl = document.getElementById('userDataTable');
  fetchTableEl.innerHTML = '<p>The grey bars represent the times each product was shown to you.</p><p>The blue bars represent the times you atually clicked on a product to vote for it!</p>';
  var impArray = [allProducts[0].impressions, allProducts[1].impressions, allProducts[2].impressions, allProducts[3].impressions, allProducts[4].impressions, allProducts[5].impressions, allProducts[6].impressions, allProducts[7].impressions, allProducts[8].impressions, allProducts[9].impressions, allProducts[10].impressions, allProducts[11].impressions, allProducts[12].impressions, allProducts[13].impressions];
  var clickArray = [allProducts[0].clicks, allProducts[1].clicks, allProducts[2].clicks, allProducts[3].clicks, allProducts[4].clicks, allProducts[5].clicks, allProducts[6].clicks, allProducts[7].clicks, allProducts[8].clicks, allProducts[9].clicks, allProducts[10].clicks, allProducts[11].clicks, allProducts[12].clicks, allProducts[13].clicks];
  localStorage.setItem('impressionsData', JSON.stringify(impArray));
  localStorage.setItem('clicksData', JSON.stringify(clickArray));
  var demoCTX = document.getElementById("myChart").getContext("2d");
  var data = {
    labels: productID,
    datasets: [
      {
        label: "Impressions on page",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: impArray
      },
      {
        label: "Clicks on images",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: clickArray
      }
    ]
  };
  var myNewChart = new Chart(demoCTX).Bar(data);
  // Persist data in HTML5 Local Storage
  var chartData1 = localStorage.getItem('impressionsData');
  if (chartData1) {
    impArray = JSON.parse(chartData1);
  } else {
    console.log('Local storage empty! Initializing');
    localStorage.setItem('impressionsData', JSON.stringify(impArray));
    }

    var chartData2 = localStorage.getItem('clicksData');
    if (chartData2) {
      clickArray = JSON.parse(chartData2);
    } else {
      console.log('Local storage empty! Initializing');
      localStorage.setItem('clicksData', JSON.stringify(clickArray));
    }
}
//clear LS button
var clearLS = document.getElementById('clearStorage');
clearLS.addEventListener('click', handleLSClear);
function handleLSClear() {
  console.log('Clearing Local Storage');
  localStorage.clear();
};

// // Persist data in HTML5 Local Storage
// var chartData1 = localStorage.getItem('impressionsData');
// if (chartData1) {
//   impArray = JSON.parse(chartData1);
// } else {
//   console.log('Local storage empty! Initializing');
//   localStorage.setItem('impressionsData', JSON.stringify(impArray));
//   }
//
//   var chartData2 = localStorage.getItem('clicksData');
//   if (chartData2) {
//     clickArray = JSON.parse(chartData2);
//   } else {
//     console.log('Local storage empty! Initializing');
//     localStorage.setItem('clicksData', JSON.stringify(clickArray));
//   }
