function action() {
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
      clearPage();
      appearOnPage();
      action();
    })
}

function action() {
  var container = document.getElementById('container').childNodes;
  container.childNodes.addEventListener('click', function () {
    for (var i = 0; i < container.childNodes.length; i++) {
      imgs[i].clicks();
      console.log('this image was clicked: ' + imgs[i].clicks)
    }
    clearPage();
    appearOnPage();
 }



  function () {
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].name === targetId)
    }
    var listenForId = event.target.id;

  }
}


//this is the one that works
function action() {
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
      clearPage();
      appearOnPage();
      action();
    })
  }
