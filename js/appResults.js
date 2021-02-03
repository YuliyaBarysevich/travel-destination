'use strict';

var resurrectedDataArray = [];

function fetchObject(key) {
  var stringifiedArray = localStorage.getItem(key);
  resurrectedDataArray = JSON.parse(stringifiedArray)
  return resurrectedDataArray;
}

fetchObject('vacationObjects');
console.log(resurrectedDataArray)

var totalMtnClick = 0;
var totalCityClick = 0;
var totalBeachClick = 0;

var h3Element = document.getElementById('quizResults');
// console.log(resurrectedDataArray[2].timesClickedMtn);
var resultsImageElement = document.getElementById('resultsImage');


function getResults() {
  for (var i = 0; i < resurrectedDataArray.length; i++) {
    totalMtnClick += resurrectedDataArray[i].timesClickedMtn;
    totalCityClick += resurrectedDataArray[i].timesClickedCity;
    totalBeachClick += resurrectedDataArray[i].timesClickedBeach;
  }
  if (totalMtnClick > totalCityClick && totalMtnClick > totalBeachClick) {
    h3Element.textContent = "Congratulations, Mountain MAN";
    resultsImageElement.src = "img/zion.jpeg"
  } else if (totalCityClick > totalMtnClick && totalCityClick > totalBeachClick) {
    h3Element.textContent = "Congratulations, City slicker";
    resultsImageElement.src = "img/boston.png"
  } else if (totalBeachClick > totalMtnClick && totalBeachClick > totalCityClick) {
    h3Element.textContent = "Congratulations, Beach BOY";
    resultsImageElement.src = "img/hawaii.jpg"
  } else if (totalBeachClick == totalMtnClick || totalBeachClick == totalCityClick || totalMtnClick == totalCityClick) {
    h3Element.textContent = "Congratulations, you get to go to California !";
    resultsImageElement.src = "img/california.jpg"
  }
  displayResults();
}

getResults();


function displayResults() {


}
