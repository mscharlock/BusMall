'use strict';
//Global variables

//Global counter
var counter = 0;
//an array for used ImageBuilders
var justChosen = [];
//an array for ImageBuilders we are displaying Now
var chosenNow = [];
//an array for the total tally of clicks on each ImageBuilder
var clickTotals = [];


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
//I think we could probably make the ImageBuilder maker constructor use a function - like name = path.split(.jpg)[0]

var imgs = [banana, boot, bag, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

//Now we'll make some prototype methods and other encapsulated functions for each piece of this stupid thing

//this is our interior click counter
ImageBuilder.prototype.clicks = function () {
  this.clicked++;
  console.log('Times selected: ' + this.clicked);
};

//on each ImageBuilder, have an event listener where it logs clicks
ImageBuilder.prototype.action = function () {
  var name = this.name;
  document.getElementId(name).addEventListener('click', function () {
    this.clicks();
  })
}

//get three random images in the chosenNow array
function getThree () {
  for (var i = 0; i < 3; i++) {
    chosenNow.push(imgs[Math.floor(Math.random()*17 +1)]);
  }
}

//make images appear
function appearOnPage () {
  for (var i = 0; i < 3; i++) {
    var leftPic = document.createElement('img');
    var midPic = document.createElement('img');
    var rightPic = document.createElement('img');

    leftPic.setAttribute('src', chosenNow[0].path);
    rightPic.setAttribute('src', chosenNow[1].path);
    midPic.setAttribute('src', chosenNow[2].path);

    var grabContainer = document.getElementById('container');
    grabContainer.innerHTML = [leftPic, midPic, rightPic];
  }


//after the images appear, I want to get rid of them when they are chosen 



//
//   leftPic.addEventListener('click', function () {
//     action();
//   }
//   );
//   midPic.addEventListener('click', action());
//   rightPic.addEventListener('click', action());
//
//   document.appendChild(leftPic, rightPic, midPic);
//
//
//   grabContainer =
// }


// //when you click, we want a new ImageBuilder to appear
// function appearinDom () {
//   //grab stuff from DOM
//   var placehold = document.getElementsByClassName('pic');
//   //put some stuff in the dom: first cycle through
//   var oneRandomImageBuilder = imgs[pick()]; //making a variable for our randomized ImageBuilder
//   placehold.innerHTML = oneRandomImageBuilder; //put the random ImageBuilder in the inner HTML of pic
//   placehold.appendChild(oneRandomImageBuilder); //append that to the DOM
// }

// appearinDom();
//
// //a function that pushes the totals of clicks on all ImageBuilders into an array
// function displayClicksPerImageBuilder () {
//   for (var i = 0; i < imgs.length; i++){
//     clickTotals.push(imgs[i].selected);
//     console.log(imgs[i] + 'Total times this ImageBuilder was clicked: ' + 'imgs[i].selected');
//   }
// }
// } //Note to self: I need to test this piece to see if it works, but I can't do that until we get a working click thing going


//push displayed ImageBuilders into chosenNow
//push just displayed ImageBuilders into justChosen
//when a random ImageBuilder appears in the DOM, make sure that they are not a) the same and b) aren't in just Chosen




//Our for loop to count the 25 global clicks - right now it is not hooked up to anything
// ImageBuilder.prototype.globalClicks = function () {
//   for (var i = 0; i < 25; i++) {
//     counter++;
//   }
// };
