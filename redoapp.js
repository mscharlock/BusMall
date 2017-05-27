'use strict';
//Global variables
var counter = 0;
var prevImages = [];
var chosenNow = [];
var shownArray = [];
var clickedItems = [];
var canvas = document.getElementById('chart');
var ctx = document.getElementById('chart').getContext('2d');

//constructor function to make our images
function MakeImg(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
}

//instantiate objects
var banana = new MakeImg('banana', './img/banana.jpg');
var boot = new MakeImg('boots', './img/boots.jpg');
var bag = new MakeImg('bag', './img/bag.jpg');
var breakfast = new MakeImg('breakfast', './img/breakfast.jpg');
var bubblegum = new MakeImg('bubblgum', './img/bubblegum.jpg');
var chair = new MakeImg('chair', './img/chair.jpg');
var cthulhu = new MakeImg('cthulhu', './img/cthulhu.jpg');
var dogduck = new MakeImg('dog duck', './img/dog-duck.jpg');
var dragon = new MakeImg('dragon', './img/dragon.jpg');
var pen = new MakeImg('pen', './img/pen.jpg');
var petsweep = new MakeImg('petsweep', './img/pet-sweep.jpg');
var scissors = new MakeImg('scissors', './img/scissors.jpg');
var shark = new MakeImg('shark', './img/shark.jpg');
var sweep = new MakeImg('sweep', './img/sweep.png');
var tauntaun = new MakeImg('taun taun bag', './img/tauntaun.jpg');
var unicorn = new MakeImg('unicorn', './img/unicorn.jpg');
var usb = new MakeImg('usb', './img/usb.gif');
var watercan = new MakeImg('watercan', './img/water-can.jpg');
var wineglass = new MakeImg('wineglass', './img/wine-glass.jpg');

//Array of all of our images
var imgs = [banana, boot, bag, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

//this is our interior click counter
MakeImg.prototype.clicks = function () {
  this.clicked++;
};

//shown counter
MakeImg.prototype.shown = function () {
  this.shown++;
};

//on a click, count up clicks
function clickingCount() {
  var container = document.getElementById('container').childNodes;
  for (var i = 0; i < container.length; i++){

    container[i].addEventListener('click', function (event) {
      var targetId = event.target.id;
      for (var j = 0; j < imgs.length; j++) {
        if (imgs[j].name === targetId) {
          imgs[j].clicks();
        }
      }
      if (counter <= 25) {
        clearPage();
        prevImages = chosenNow;
        chosenNow = [];
        getThree();
        appearOnPage();
        clickingCount();
        console.log('clicked array: ' + clickedItems);
      } else {
        console.log('clicked array: ' + clickedItems);
        console.log('shown array: ' + shownArray);
        clearPage();
        renderResults();
        makeChart();
      }
    });
  }
}

function giveMeClicks() {
  var clickResults = [];
  for (var i = 0; i < imgs.length; i++) {
    clickResults.push(imgs[i].clicked);
  }
  return clickResults;
}

//use global counter to ++, to show an image, make sure we didn't see it in chosen Now or prevImages, then if img appears, count up shown
function getThree() {
  counter++;
  while (chosenNow.length !== 3) {
    var imgChoice = imgs[Math.floor(Math.random() * imgs.length)];
    if (chosenNow.includes(imgChoice) === false && prevImages.includes(imgChoice) === false) {
      chosenNow.push(imgChoice);
      imgChoice.shown++;
    }
  }
}


//clear page
function clearPage () {
  var container = document.getElementById('container');
  container.innerHTML = '';
}

//make images appear
function appearOnPage () {
  var leftPic = document.createElement('img');
  var midPic = document.createElement('img');
  var rightPic = document.createElement('img');

  leftPic.setAttribute('src', chosenNow[0].path);
  rightPic.setAttribute('src', chosenNow[1].path);
  midPic.setAttribute('src', chosenNow[2].path);

  leftPic.setAttribute('id', chosenNow[0].name);
  rightPic.setAttribute('id', chosenNow[1].name);
  midPic.setAttribute('id', chosenNow[2].name);

  var grabContainer = document.getElementById('container');
  grabContainer.appendChild(leftPic);
  grabContainer.appendChild(rightPic);
  grabContainer.appendChild(midPic);
}

var renderResults = function () {
  var resultData = document.getElementById('results');
  for (var i = 0; i < imgs.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = imgs[i].name + ' had this many clicks: ' + imgs[i].clicked + ' and was shown: ' + imgs[i].shown + ' times';
    resultData.appendChild(listItem);
  }
};

//initialize the site with first images
getThree();
appearOnPage();
clickingCount();

//Make the chart
function makeChart() {

  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['banana', 'boot', 'bag', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'],
      datasets: [{
        label: 'How many clicks on each item?',
        data: giveMeClicks(),
        backgroundColor: ['#EE3B3B', '#CD9B9B', '#FF7D40', '#A02422', '#7926ca', '#7f9e8e', '#22d8b7', '#3efd52', '#94084c', '#2c36ed', '#fbae86', '#657605', '#1c2965', '#b6c1c7', '#dd6aae', '#b4937e', '#955726', '#69a3bc', '#ee1598']
      }],
      options: { },
    }
  }
)
}


//Note/attribution: to get the giveMeClicks to work, I ended up referring to what David did in his code.//
