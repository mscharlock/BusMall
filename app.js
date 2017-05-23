'use strict';
//Global variables

//Global counter
var counter = 0;
//an array for used images
var justChosen = [];
//an array for images we are displaying Now
var chosenNow = [];
//an array for the total tally of clicks on each image
var clickTotals = [];
//an array to hold all the images after they're created
//there is probably a better way to do this one too...something like push this.name into var img = []
var imgs = [banana, boot, bag, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];
//constructor function
function Image (name, path) {
  this.name = name;
  this.path = path;
  this.clicked = 0;
}

//make the images
var banana = new Image('banana', './img/banana.jpg');
var boot = new Image('boots', './img/boots.jpg');
var bag = new Image('bag', './img/bag.jpg');
var breakfast = new Image('breakfast', './img/breakfast.jpg');
var bubblegum = new Image('bubblgum', './img/bubblegum.jpg');
var chair = new Image('chair', './img/chair.jpg');
var cthulhu = new Image('cthulhu', './img/cthulhu.jpg');
var dogduck = new Image('dog duck', './img/dog-duck.jpg');
var dragon = new Image('dragon', './img/dragon.jpg');
var pen = new Image('pen', './img/pen.jpg');
var petsweep = new Image('petsweep', './img/pet-sweep.jpg');
var scissors = new Image('scissors', './img/scissors.jpg');
var shark = new Image('shark', './img/shark.jpg');
var sweep = new Image('sweep', './img/sweep.png');
var tauntaun = new Image('taun taun bag', './img/tauntaun.jpg');
var unicorn = new Image('unicorn', './img/unicorn.jpg');
var usb = new Image('usb', './img/usb.gif');
var watercan = new Image('watercan', './img/water-can.jpg');
var wineglass = new Image('wineglass', './img/wine-glass.jpg');
//I think we could probably make the image maker constructor use a function - like name = path.split(.jpg)[0]

//Now we'll make some prototype methods and other encapsulated functions for each piece of this stupid thing

//this is our interior click counter
Image.prototype.clicked = function () {
  var timesSelected = 0;
  timesSelected++;
  console.log('Times selected: ' + timesSelected);
};

//on each image, have an event listener where it logs clicks
Image.prototype.eventHandler = function ()
.addEventListener('click', function () {
  //count one
  this.clicked();
  console.log('clicks: ' + this.clicked);
});

//Our for loop to count the 25 global clicks - right now it is not hooked up to anything
Image.prototype.globalClicks = function () {
  for (var i = 0; i < 25; i++) {
    counter++;
  }
};

//A thing that gives a number between 1 and 18
function pick() {
  var randomImgPicker = Math.floor(Math.random()*17 +1);
  return randomImgPicker; //why is this return not working?
}

pick();


//when you click, we want a new image to appear
function appearinDom () {
  //grab stuff from DOM
  var placehold = document.getElementsByClassName('pic');
  //put some stuff in the dom: first cycle through
  var oneRandomImage = imgs[pick()]; //making a variable for our randomized image
  placehold.innerHTML = oneRandomImage; //put the random image in the inner HTML of pic
  placehold.appendChild(oneRandomImage); //append that to the DOM
}

appearinDom();

//a function that pushes the totals of clicks on all images into an array
function displayClicksPerImage () {
  for (var i = 0; i < imgs.length; i++){
    clickTotals.push(imgs[i].selected);
    console.log(imgs[i] + 'Total times this image was clicked: ' + 'imgs[i].selected');
  }
}
// } //Note to self: I need to test this piece to see if it works, but I can't do that until we get a working click thing going
