
'use strict';
//An array to store images from constructor
var totalClicks = 0;
var imageArray = [];
var randLeft;
var randMiddle;
var randRight;
var previouslyShown = [];
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
//var previouslyShown = [];

//generate three different numbers
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
  if(randLeft === previouslyShown[0] ||
    randLeft === previouslyShown[1] || randLeft ===
    previouslyShown[2] || randMiddle ===
    previouslyShown[0] || randMiddle ===
    previouslyShown[1] || randMiddle ===
    previouslyShown[2] || randRight ===
    previouslyShown[0] || randRight ===
    previouslyShown[1] || randRight ===
    previouslyShown[2]){
    randLeft = (Math.floor(Math.random() * imageArray.length));
    randMiddle = (Math.floor(Math.random() * imageArray.length));
    randRight = (Math.floor(Math.random() * imageArray.length));
  }
  //match the three different numbers to the imageArray elements
  imageLeft.src = imageArray[randLeft].filePath;
  imageMiddle.src = imageArray[randMiddle].filePath;
  imageRight.src = imageArray[randRight].filePath;

  imageArray[randLeft].numberShown += 1;
  imageArray[randMiddle].numberShown += 1;
  imageArray[randRight].numberShown += 1;
  //console.log(imageArray[randLeft].productName + ' has ' + imageArray[randLeft].numberShown + ' views' );

};
function handleClick(event){
  //previouslyShown = randomNumberArray;
  if(event.target.id !== 'left' && event.target.id !== 'middle' && event.target.id !== 'right'){
    alert('Click on an image');
    return;
  }
  totalClicks += 1;
  console.log('There have been ' + totalClicks + ' total clicks');
  if (event.target.id === 'left' ){
    //console.log('user clicked left');
    getRandomNumber();
    imageArray[randLeft].numberClicked = imageArray[randLeft].numberClicked + 1;

  } else if(event.target.id === 'middle'){
    //console.log('user clicked middle');
    getRandomNumber();
    imageArray[randMiddle].numberClicked = imageArray[randMiddle].numberClicked + 1;
  } else if(event.target.id === 'right'){
    //console.log('user clicked right');
    getRandomNumber();
    imageArray[randRight].numberClicked = imageArray[randRight].numberClicked + 1;
  }
  if (totalClicks > 3){
    container.removeEventListener('click',handleClick);
    console.log('max number of clicks reached');
    resultsButton.hidden = false;
  }
}

function handleResultsButton(){
  alert('this is when you draw the chart.');
}
getRandomNumber();
var container = document.getElementById('container');
container.addEventListener('click',handleClick);
var resultsButton = document.getElementById('resultsButton');
resultsButton.addEventListener('click',handleResultsButton);
