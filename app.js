'use strict';
//Global variables
var counter = 0;
var prevImages = [];
var chosenNow = [];
var clickedArray = [];

//constructor function
function ImageBuilder(name, path) {
  this.name = name;
  this.path = path;
  this.clicked = 0;
}

//make the ImageBuilderBuilders
var banana = new ImageBuilder('banana', './img/banana.jpg');
var boot = new ImageBuilder('boots', './img/boots.jpg');
var bag = new ImageBuilder('bag', './img/bag.jpg');
var breakfast = new ImageBuilder('breakfast', './img/breakfast.jpg');
var bubblegum = new ImageBuilder('bubblgum', './img/bubblegum.jpg');
var chair = new ImageBuilder('chair', './img/chair.jpg');
var cthulhu = new ImageBuilder('cthulhu', './img/cthulhu.jpg');
var dogduck = new ImageBuilder('dog duck', './img/dog-duck.jpg');
var dragon = new ImageBuilder('dragon', './img/dragon.jpg');
var pen = new ImageBuilder('pen', './img/pen.jpg');
var petsweep = new ImageBuilder('petsweep', './img/pet-sweep.jpg');
var scissors = new ImageBuilder('scissors', './img/scissors.jpg');
var shark = new ImageBuilder('shark', './img/shark.jpg');
var sweep = new ImageBuilder('sweep', './img/sweep.png');
var tauntaun = new ImageBuilder('taun taun bag', './img/tauntaun.jpg');
var unicorn = new ImageBuilder('unicorn', './img/unicorn.jpg');
var usb = new ImageBuilder('usb', './img/usb.gif');
var watercan = new ImageBuilder('watercan', './img/water-can.jpg');
var wineglass = new ImageBuilder('wineglass', './img/wine-glass.jpg');

//Array of all of our images
var imgs = [banana, boot, bag, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

//this is our interior click counter
ImageBuilder.prototype.clicks = function () {
  this.clicked++;
};

//on each ImageBuilder, have an event listener where it logs clicks and repeats the
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
      if (counter <= 5) {
        clearPage();
        prevImages = chosenNow;
        chosenNow = [];
        getThree();
        appearOnPage();
        console.log('prevImages: '+ prevImages);
        clickingCount();
      } else {
        console.log('clickedArray:' + clickedArray);
        clearPage();
        renderResults();
      }
    });
  }
}

var renderResults = function () {
  var resultData = document.getElementById('results');
  for (var i = 0; i < imgs.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = imgs[i].name + ' had this many clicks: ' + imgs[i].clicked;
    resultData.appendChild(listItem);
  }
};

function clearPage () {
  var container = document.getElementById('container');
  container.innerHTML = '';
}

function getThree() {
  counter++;
  while (chosenNow.length !== 3) {
    var imgChoice = imgs[Math.floor(Math.random() * imgs.length)];
    if (chosenNow.includes(imgChoice) === false) {
      chosenNow.push(imgChoice);
    }
    console.log('ChosenNow at end of clearPage: ' +chosenNow);
  }
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

//initialize the site with first images
getThree();
appearOnPage();
clickingCount();
