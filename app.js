'use strict';
//Global variables
var counter = 0;
var justChosen = [];

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

//WORKING
//on each ImageBuilder, have an event listener where it logs clicks
function clickingCount() {
  var container = document.getElementById('container').childNodes;
  console.log(container, container.length);

  for (var i = 0; i < container.length; i++){
    console.log(container[i]);
    container[i].addEventListener('click', function (event) {
      console.log(event.target.id);
      var targetId = event.target.id;
      for (var j = 0; j < imgs.length; j++) {
        if (imgs[j].name === targetId) {
          imgs[j].clicks();
          console.log(imgs[j]);
        }
      }
      // clearPage();
      // appearOnPage();
      // clickingCount();
    });
  }
}

function clearPage () {
  var container = document.getElementById('container');
  container.innerHTML = '';
}

var prevImages = [];
var chosenNow = [];

//WORKING
function randomNumber () {
  var num = Math.floor(Math.random() * imgs.length);
  return num;
}

var randomIndexes = [];

function getThree () {
  counter++;
  console.log('counter: ' + counter);
  if (randomIndexes.length < 3) {
    var integer = randomNumber();
    chosenNow.push(integer);
    prevImages.push(chosenNow);
  }
  console.log('prevImages: ' + prevImages);
  console.log('chosen now:' + chosenNow);
}
//
// clearPage();
//
// function getThreeMore () {
//   counter++;
//   randomIndexes = [];
//   if (randomIndexes.length < 3 && randomIndexes.includes(chosenNow) = false) {
//     chosenNow.length = 0;
//     chosenNow.push(randomNumber);
//   }
// }
//

//get three random images in the chosenNow array
// function getThree () {
//   var prevImages = chosenNow;
//   var chosenNow = [];
//   var randomIndexes = [];
//   counter++;
//   //we're comparing numbers, not the objects
//   while (randomIndexes.length < 3 && counter <= 25) {
//     var randomNumber = Math.floor(Math.random() * imgs.length);
//
//     if (randomNumber !== randomIndexes[0] && randomNumber !== randomIndexes[1] && randomNumber !== randomIndexes[2]) {
//       chosenNow.push(imgs[randomNumber]);
//
//
//
//       arr.includes(searchElement)
//     )
//     //clear and reset
//     //in this new set, are any the same as chosenNow?
//     prevImages.push(chosenNow);
//     }
//   }
//
// clearPage();

//compare the prev with three new random numbers
// function getThreeNotPrev () {

//use the random numbers to generate images



//
//   function getRight () {
//     var chosenNow = [];
//     var randomIndexes = [
//   }
//
//
//
//     && randomNumber !== prevImages[0]) {
//       randomIndexes.push(randomNumber);
//       chosenNow.push(imgs[randomNumber]);
//       console.log('random number: ' + randomNumber);
//       console.log(chosenNow);
//
//     }
//   }
//   console.log('chosenNow: ' + chosenNow[0]);
//   return chosenNow;
// }

//make images appear
function appearOnPage () {
  var imagesToShow = getThree();
  var leftPic = document.createElement('img');
  var midPic = document.createElement('img');
  var rightPic = document.createElement('img');

  leftPic.setAttribute('src', imagesToShow[0].path);
  rightPic.setAttribute('src', imagesToShow[1].path);
  midPic.setAttribute('src', imagesToShow[2].path);
  console.log(imagesToShow);
  leftPic.setAttribute('id', imagesToShow[0].name);
  rightPic.setAttribute('id', imagesToShow[1].name);
  midPic.setAttribute('id', imagesToShow[2].name);

  var grabContainer = document.getElementById('container');
  // grabContainer.innerHTML = leftPic, midPic, rightPic;
  grabContainer.appendChild(leftPic);
  grabContainer.appendChild(rightPic);
  grabContainer.appendChild(midPic);
}


// appearOnPage();
// action();

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

//Initiation of the game on page load


// //this stuff has to come after we have cycled through the 25 times
// var clickNumbers = [banana.clicked, boot.clicked, bag.clicked, breakfast.clicked, bubblegum.clicked, chair.clicked, cthulhu.clicked, dogduck.clicked, dragon.clicked, pen.clicked, petsweep.clicked, scissors.clicked, shark.clicked, sweep.clicked, tauntaun.clicked, unicorn.clicked, usb.clicked, watercan.clicked, wineglass.clicked];
// , 'boot', 'bag', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass']


// var ctx = document.getElementById('chart').getContext('2d');
//
// var myPieChart = new Chart(ctx,{
//   type: 'pie',
//   data: {
//     labels: ['banana', 'boot', 'bag', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'],
//     datasets: [{
//       label: 'How many clicks on each item?',
//       data: [15, 22, 12, 5],
//       backgroundColor: ['#EE3B3B', '#CD9B9B', '#FF7D40', '#A02422']
//     }],
//     options: { },
//   }
// }
// );
