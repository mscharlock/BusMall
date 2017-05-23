'use strict';
//Global counter
var counter = 0;

//constructor function
function Image (name, path, clicks) {
  this.name = name;
  this.path = path;
  this.clicks= clicks;
}

Image.prototype.clicked = function () {
  var click = 0;
  click++;
  console.log('click: ' + click);
};

// Image.prototype.random = function () {
//   var randomImgPicker = Math.floor(Math.random()*19 +1);
//   return randomImgPicker;
// }

//make the images
var banana = new Image ('banana', './img/banana.jpg', 0);
var boot = new Image ('boots', './img/boots.jpg', 0);
var bag = new Image ('bag', './img/bag.jpg', 0);
var breakfast = new Image ('breakfast', './img/breakfast.jpg', 0);
var bubblegum = new Image ('bubblgum', './img/bubblegum.jpg', 0);
var chair = new Image ('chair', './img/chair.jpg', 0);
var cthulhu = new Image ('cthulhu', './img/cthulhu.jpg', 0);
var dogduck = new Image ('dog duck', './img/dog-duck.jpg', 0);
var dragon = new Image ('dragon', './img/dragon.jpg', 0);
var pen = new Image ('pen', './img/pen.jpg', 0);
var petsweep = new Image ('petsweep', './img/pet-sweep.jpg', 0);
var scissors = new Image ('scissors', './img/scissors.jpg', 0);
var shark = new Image ('shark', './img/shark.jpg', 0);
var sweep = new Image ('sweep', './img/sweep.png', 0);
var tauntaun = new Image ('taun taun bag', './img/tauntaun.jpg', 0);
var unicorn = new Image ('unicorn', './img/unicorn.jpg', 0);
var usb = new Image ('usb', './img/usb.gif', 0);
var watercan = new Image ('watercan', './img/water-can.jpg', 0);
var wineglass = new Image ('wineglass', './img/wine-glass.jpg', 0);

//I think we could probably make the image maker constructor use a function - like name = path.split(.jpg)[0]

//an array to hold all the images after they're created
//there is probably a better way to do this one too...something like push this.name into var img = []
var imgs = [banana, boot, bag, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];
//an array for used images
var justChosen = [];




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




// for (var i = 0; i < 25, i++) {
  //do something here with clicks
//prototype image method that says if you click, count one



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
