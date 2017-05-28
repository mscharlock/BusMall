'use strict';

var hello = "Hello World!!";
localStorage.item = hello;
// get string
console.log(localStorage.item); // will return 'Hello World!!'


var arrOJunk = ['hat', 'cat', 'bat'];
localStorage.arrOJunk = arrOJunk
console.log(localStorage);

JSON.stringify(arrOJunk);

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
var imgs = [banana, boot, bag, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

for (var i = 0; i < imgs.length; i++) {
  var imgNames = [];
  imgNames.push(imgs[i].names);
  JSON.stringify(imgNames);

  var imgClicks = [];
  imgClicks.push(imgs[i].clicked);
  JSON.stringify(imgClicks);
}
