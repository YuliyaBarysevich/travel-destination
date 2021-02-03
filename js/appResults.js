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
    resultsImageElement.src = "img/mountains2.jpg"
  } else if (totalCityClick > totalMtnClick && totalCityClick > totalBeachClick) {
    h3Element.textContent = "Congratulations, City slicker";
    resultsImageElement.src = "img/club.jpg"
  } else if (totalBeachClick > totalMtnClick && totalBeachClick > totalCityClick) {
    h3Element.textContent = "Congratulations, Beach BOY";
    resultsImageElement.src = "img/beach.jpg"
  } else {
    h3Element.textContent = "Darn it something went wrong";
  }
  displayResults();
}

getResults();


function displayResults() {


}
