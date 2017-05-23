'use strict';
//Global counter
var counter = 0;
//shownImages array which is empty, that we can push to
var usedImages = [];

//constructor function
function Image (name, path) {
  this.name = name;
  this.path = path;
}

//make the images
var banana = new Image ('banana', './img/banana.png');

//prototype image method that says if you click, count one
Image.prototype.clicked = function () {
  var click = 0;
  click++;
  console.log(click);
};
//
// this.Image.totalClicks() {
//
// }
//
// //shown method
// this.Image.shown () {
//   //method
// }
//
// //image randomizer
// Math.floor(Math.random()*19+1)
// //when you click, log the click
//
// //when you click, show new set of 3 randoms
//
// //listen for the click
