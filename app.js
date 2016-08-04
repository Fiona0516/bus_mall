'use strict';
//global variables
var totalClicks = 0;
var imageArray = [];
var randLeft;
var randMiddle;
var randRight;
var previouslyShown = [];
var usersData;
var imageLeft = document.getElementById('left');
var imageMiddle = document.getElementById('middle');
var imageRight = document.getElementById('right');

//constructor
function allProduct(productName, filePath){
  this.productName = productName;
  this.filePath = filePath;
  this.numberShown = 0;
  this.numberClicked = 0;
  imageArray.push(this);
}
function newObjects(){
  bag = new allProduct('bag','image/bag.jpg');
  banana = new allProduct('banana','image/banana.jpg');
  bathroom = new allProduct('bathroom','image/bathroom.jpg');
  boots = new allProduct('boots','image/boots.jpg');
  breakfast = new allProduct('breakfast','image/breakfast.jpg');
  bubblegum = new allProduct('bubblegum','image/bubblegum.jpg');
  chair = new allProduct('chair','image/chair.jpg');
  cthulhu = new allProduct('cthulhu','image/cthulhu.jpg');
  dog_duck = new allProduct('dog_duck','image/dog-duck.jpg');
  dragon = new allProduct('dragon','image/dragon.jpg');
  pen = new allProduct('pen','image/pen.jpg');
  pet_sweep = new allProduct('pet_sweep','image/pet-sweep.jpg');
  scissors = new allProduct('scissors','image/scissors.jpg');
  shark = new allProduct('shark','image/shark.jpg');
  sweep = new allProduct('sweep','image/sweep.jpg');
  tauntaun = new allProduct('tauntaun','image/tauntaun.jpg');
  unicorn = new allProduct('unicorn','image/unicorn.jpg');
  usb = new allProduct('usb','image/usb.jpg');
  water_can = new allProduct('water_can','image/water-can.jpg');
  wine_glass = new allProduct('wine_glass','image/wine-glass.jpg');
}
//check local Storage
if(localStorage.usersData){
  console.log('Local Storage exists');
  var parsed = JSON.parse(localStorage.usersData);
  imageArray = parsed;
}else{
  var imageArray = [];
  newObjects();
  console.log('Local Storage doesnt exist.');
}
;
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
  imageLeft.id = imageArray[randLeft].productName;
  imageMiddle.id = imageArray[randMiddle].productName;
  imageRight.id = imageArray[randRight].productName;

  imageArray[randLeft].numberShown += 1;
  imageArray[randMiddle].numberShown += 1;
  imageArray[randRight].numberShown += 1;
  //console.log(imageArray[randLeft].productName + ' has ' + imageArray[randLeft].numberShown + ' views' );

};

function tallyClicks(){

}

function handleClick(event){
  //previouslyShown = randomNumberArray;
  if(event.target.id !== imageArray[randLeft].productName && event.target.id !== imageArray[randRight].productName && event.target.id !== imageArray[randMiddle].productName){
    alert('Click on an image');
    return;
  }
  //console.log('There have been ' + totalClicks + ' total clicks');

  if (event.target.id === imageArray[randLeft].productName ){
    //console.log('user clicked left');
    imageArray[randLeft].numberClicked += 1;
    getRandomNumber();

  } else if(event.target.id === imageArray[randMiddle].productName){
    //console.log('user clicked middle');
    imageArray[randMiddle].numberClicked += 1;
    getRandomNumber();

  } else if(event.target.id === imageArray[randRight].productName){
    //console.log('user clicked right');
    imageArray[randRight].numberClicked += 1;
    getRandomNumber();
  }
  tallyClicks();
  totalClicks += 1;
  if (totalClicks > 4){
    container.removeEventListener('click',handleClick);
    console.log('max number of clicks reached');
    resultsButton.hidden = false;
  } else{
    parsed = JSON.stringify(imageArray);
    localStorage.setItem('parsed',parsed);

  }
}

//chart stuff
function handleResultsButton(){
  //alert('this is when you draw the chart.');
  var labels = [];
  var dataClicks = [];
  var dataShown = [];
  for( var i = 0; i < imageArray.length; i++){
    labels.push(imageArray[i].productName);
    dataClicks.push(imageArray[i].numberClicked);
    dataShown.push(imageArray[i].numberShown);
  }
  var ctx = document.getElementById('resultBar');
  var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
      labels: labels,
      datasets:[{
        label: 'Number of Clicks',
        data: dataClicks,
        backgroundColor: '#ff1a8c',
      },
        {
          label: 'Number of Times Shown',
          data: dataShown,
          backgroundColor: '#0066cc',
        }]
    },

  });
}
getRandomNumber();
var container = document.getElementById('container');
container.addEventListener('click',handleClick);
var resultsButton = document.getElementById('resultsButton');
resultsButton.addEventListener('click',handleResultsButton);
//Check local storage
// (function checkLocal(){
//   if(localStorage.getItem('usersData')){
//     console.log('Local Storage exists');
//     var parsed = JSON.parse(localStorage.usersData);
//     imageArray = parsed;
//   }else{
//     var imageArray = [];
//     newObjects();
//     console.log('Local Storage doesnt exist.');
//   }
// });
