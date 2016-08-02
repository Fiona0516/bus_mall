
'use strict';
//An array to store images from constructor

var imageArray = [];
var randLeft;
var randMiddle;
var randRight;
//constructor
function allProduct(productName, filePath){
  this.productName = productName;
  this.filePath = filePath;
  this.numberShown = 0;
  this.numberClicked = 0;
  imageArray.push(this);
}
var bag = new allProduct('bag','image/bag.jpg');
var banana = new allProduct('banana','image/banana.jpg');
var bathroom = new allProduct('bathroom','image/bathroom.jpg');
var boots = new allProduct('boots','image/boots.jpg');
var breakfast = new allProduct('breakfast','image/breakfast.jpg');
var bubblegum = new allProduct('bubblegum','image/bubblegum.jpg');
var chair = new allProduct('chair','image/chair.jpg');
var cthulhu = new allProduct('cthulhu','image/cthulhu.jpg');
var dog_duck = new allProduct('dog_duck','image/dog-duck.jpg');
var dragon = new allProduct('dragon','image/dragon.jpg');
var pen = new allProduct('pen','image/pen.jpg');
var pet_sweep = new allProduct('pet_sweep','image/pet-sweep.jpg');
var scissors = new allProduct('scissors','image/scissors.jpg');
var shark = new allProduct('shark','image/shark.jpg');
var sweep = new allProduct('sweep','image/sweep.jpg');
var tauntaun = new allProduct('tauntaun','image/tauntaun.jpg');
var unicorn = new allProduct('unicorn','image/unicorn.jpg');
var usb = new allProduct('usb','image/usb.jpg');
var water_can = new allProduct('water_can','image/water-can.jpg');
var wine_glass = new allProduct('wine_glass','image/wine-glass.jpg');

var imageLeft = document.getElementById('left');
var imageMiddle = document.getElementById('middle');
var imageRight = document.getElementById('right');
var userClick = document.getElementById('container');
//match random number to element in imageArray and display three images
var getRandomNumber = function() {
  randLeft = (Math.floor(Math.random() * imageArray.length));
  randMiddle = (Math.floor(Math.random() * imageArray.length));
  randRight = (Math.floor(Math.random() * imageArray.length));

  while (randLeft === randMiddle || randLeft === randRight || randMiddle === randRight){
    if ( randLeft === randMiddle){
      randLeft = (Math.floor(Math.random() * imageArray.length));
    }
    if ( randLeft === randRight){
      randLeft = (Math.floor(Math.random() * imageArray.length));
    }
    if (randMiddle === randRight){
      randMiddle = (Math.floor(Math.random() * imageArray.length));
    }
  }
  imageLeft.src = imageArray[randLeft].filePath;
  imageMiddle.src = imageArray[randMiddle].filePath;
  imageRight.src = imageArray[randRight].filePath;
  imageArray[randLeft].numberShown = imageArray[randLeft].numberShown + 1;
  imageArray[randMiddle].numberShown = imageArray[randMiddle].numberShown + 1;
  imageArray[randRight].numberShown = imageArray[randRight].numberShown + 1;

};
function handleClick(event){
  event.preventDefault();
  if (event.target.id === 'left'){
    console.log('user clicked left');

    imageArray[randLeft].numberShown = imageArray[randLeft].numberShown + 1;
  } else if(event.target.id === 'middle'){
    console.log('user clicked middle');

    imageArray[randMiddle].numberShown = imageArray[randMiddle].numberShown + 1;
  } else if(event.target.id === 'right'){
    console.log('user clicked right');

    imageArray[randRight].numberShown = imageArray[randRIght].numberShown + 1;
  } else{
    alert('You must click an image!');
  }

}
getRandomNumber();
container.addEventListener('click',handleClick);
