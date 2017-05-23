'use strict';
//Global variables

//Global counter
var counter = 0;
//an array for used images
var justChosen = [];
//an array for images we are displaying Now
var chosenNow = [];
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
}

//A thing that gives a number between 1 and 18
function pick() {
  var randomImgPicker = Math.floor(Math.random()*17 +1);
  return randomImgPicker;
}
pick(); //tested: pick is working


//when you click, we want a new image to appear
Image.prototype.appearinDom = function () {
  //grab stuff from DOM
  var imgInDom = document.getElementsByClassName('pic');
  //put some stuff in the dom: first cycle through
  for (var i = 0; i < imgs.length; i++) { //loop through images
    var oneRandomImage = imgs[pick()]; //making a variable for our randomized image
    console.log(oneRandomImage);
  }};
    pic.innerHTML = oneRandomImage; //put the random image in the inner HTML of pic
    pic.appendChild(oneRandomImage); //append that to the DOM
  }
//
//
// //fix this
// Image.prototype.addtoDom = function () {
//   imgInDom.addEventListener('click', function () {
//     //count one
//     this.clicked();
//     console.log('clicks: ' + this.clicked);
//   })
    // push a picture (using randomizer) into innerHTML of pic
    // something like document.innerHTML = imgs[random()]


//Make this it's own function
//give us the name of the picture we just pushed in?
//     var srcAttribute = this.getAttribute('src');
// //split that by . so we can get the path
//     var nameOfChosen = srcAttribute.split('.')[0];
// //push the selected into justChosen array
//     justChosen.push(nameOfChosen);
//   }
// }

// for (var i = 0; i < 25, i++) {
  //do something here with clicks
//prototype image method that says if you click, count one




//
// for (var i = 0; i < ??; i++) {
//   var changeImage = document.getElementsByClassName('pic').innerHTML
//   //it can't be justChosen or it's two neighbors
//
// if justChosen[i] === imgs[i] {
// //replace innerHTML of pic to a new imgs[i]
// } else {
//
// }

// Image.prototype.eventHandler = function () {
//
// function click1 () {
//   var imgPic1 = document.getElementById('pic1');
//   imgPic1.addEventListener('click', function() {
//     imgs[0].clicks++;
//     var randomImgPicker = Math.floor(Math.random()*5 +1);
//     console.log('clicked1 ' + randomImgPicker + ' clicks: '+ imgs[0].clicks);
//     justChosen.push(imgs[0]);
//   }
// );
// }
//
// function click2 () {
//   var imgPic2 = document.getElementById('pic2');
//   imgPic2.addEventListener('click', function() {
//     imgs[1].clicks++;
//     var randomImgPicker = Math.floor(Math.random()*5 +1);
//     console.log('clicked2 ' + randomImgPicker + ' clicks: ' + imgs[1].clicks);
//     justChosen.push(imgs[1]);
//   }
// );
// }
//
// function click3 () {
//   var imgPic3 = document.getElementById('pic3');
//   imgPic3.addEventListener('click', function() {
//     imgs[2].clicks++;
//     var randomImgPicker = Math.floor(Math.random()*5 +1);
//     console.log('clicked3 ' + randomImgPicker + ' clicks: ' + imgs[2].clicks);
//     justChosen.push(imgs[2]);
//   }
// );
// }
//
// click1();
// click2();
// click3();
//
// justChosen;

    // var srcAttr = this.getAttribute('src');
    // console.log(srcAttr.split('./img/'[1]));

    //
    // function getSize() {
    //   var img = document.getElementById('test-img');
    //   img.addEventListener('click', function() {
    //     var srcAttr = this.getAttribute('src');
    //     console.log(srcAttr.split('.it/')[1]);
    //   });
    // }
    //
    // getSize();
//
// banana.eventHandler();

//
// function getSize() {
//   var img = document.getElementById('test-img');
//   img.addEventListener('click', function() {
//     var srcAttr = this.getAttribute('src');
//     console.log(srcAttr.split('.it/')[1]);
//   });
// }

//
// //add an event listener
// pic1.addEventListener('click', function(){
//   console.log('my image type: ', this.getAttribute('src'));
//   counter++;
//
//   console.log('counter' , counter);
// })

//
//   document.getElementById('test-img');
//     img.addEventListener('click', function() {
//       var srcAttr = this.getAttribute('src');
//       console.log(srcAttr.split('.it/')[1]);
//     });
//   }var dog = document.getElementById('dog');
//
// dog.addEventListener('click', function() {
//   console.log('my image type:', this.getAttribute('src'));
//   counter++;
//
//   console.log('counter', counter);
// });
//
//
//
//
// dog.addEventListener('click', function() {
//   console.log('my image type:', this.getAttribute('src'));
//   counter++;
//
//   console.log('counter', counter);
// })
// }







//our random image: imgs[i].random

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
