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
//I think we could probably make the ImageBuilder maker constructor use a function - like name = path.split(.jpg)[0]
var imgs = [banana, boot, bag, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

//this is our interior click counter
ImageBuilder.prototype.clicks = function () {
  this.clicked++;
};

//WORKING
//on each ImageBuilder, have an event listener where it logs clicks
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
        // console.log("clear")
        prevImages = chosenNow;
        chosenNow = [];
        getThree();
        // // console.log("three")
        appearOnPage();
        console.log('prevImages: '+ prevImages);
        //mainLoop++;
        clickingCount();
      } else {
        // boot.clicked, bag.clicked, breakfast.clicked, bubblegum.clicked, chair.clicked, cthulhu.clicked, dogduck.clicked, dragon.clicked, pen.clicked, petsweep.clicked, scissors.clicked, shark.clicked, sweep.clicked, tauntaun.clicked, unicorn.clicked, usb.clicked, watercan.clicked, wineglass.clicked];
        console.log('clickedArray:' + clickedArray);
        clearPage();
        renderResults();
      }
      //console.log("mainloop" +mainLoop);
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


      // clearPage();
      // getThree();
      // console.log('Get three: ' + ChosenNow);
      // appearOnPage();
      // container[1].addEventListener('click', function (event) {
      //   console.log(event.target.id);
      //   console.log("we selected the event target id")
      //   var targetId = event.target.id;
      //   for (var j = 0; j < imgs.length; j++) {
      //     if (imgs[j].name === targetId) {
      //       imgs[j].clicks();
      //     }
      //   }
      // }

    //
    // ),
    //   container[2].addEventListener('click', function (event) {
    //       console.log(event.target.id);
    //       console.log("we selected the event target id")
    //       var targetId = event.target.id;
    //       for (var j = 0; j < imgs.length; j++) {
    //         if (imgs[j].name === targetId) {
    //           imgs[j].clicks();
    //         }
    //       }
    //     })
    // }




function clearPage () {
  var container = document.getElementById('container');
  container.innerHTML = '';
}

function getThree() {
  counter++;
  while (chosenNow.length !== 3) {
    // console.log("we're in getthree")
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

// function runIt () {
//   do {
//     clearPage();
//     console.log("clear page!")
//     getThree();
//     console.log("get three runs")
//     appearOnPage();
//     console.log("appear on page runs")
//     clickingCount();
//     console.log("clicking count runs")
//   }
//   while (counter < 4);
// }

// runIt();
getThree();
appearOnPage();

// do {
//
//
clickingCount();
//   console.log(counter);
// } while (counter < 4);
// //this stuff has to come after we have cycled through the 25 times



//
//
// // var ctx = document.getElementById('chart').getContext('2d');
// //
// // var myPieChart = new Chart(ctx,{
// //   type: 'pie',
// //   data: {
// //     labels: ['banana', 'boot', 'bag', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'],
// //     datasets: [{
// //       label: 'How many clicks on each item?',
// //       data: [15, 22, 12, 5],
// //       backgroundColor: ['#EE3B3B', '#CD9B9B', '#FF7D40', '#A02422']
// //     }],
// //     options: { },
// //   }
// // }
// // );
//
// //
