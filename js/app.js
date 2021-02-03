'use strict';
// make sure the array is in order of: 6 questions, with Mtn, City, Beach
var imagesArray = ['mountains2', 'old-town', 'beach', 'barbeque', 'pasta2', 'seafood', 'activity', 'EduvationalVacation', 'relaxFriends', 'beer', 'wine', 'coctail', 'campfire', 'club', 'sunset', 'cabin', 'plaza_hotel', 'resort'];

VacationQuestion.allQuestions = [];

function VacationQuestion(question, timesClickedMtn, timesClickedCity, timesClickedBeach, imageName1, imageName2, imageName3) {
  this.question = question;
  this.timesClickedMtn = timesClickedMtn;
  this.timesClickedCity = timesClickedCity;
  this.timesClickedBeach = timesClickedBeach;
  this.imagePath1 = `img/${imageName1}.jpg`;
  this.imagePath2 = `img/${imageName2}.jpg`;
  this.imagePath3 = `img/${imageName3}.jpg`;
  this.imageName1 = imageName1;
  this.imageName2 = imageName2;
  this.imageName3 = imageName3;
  // this.hasBeenClickedArray = [];
  VacationQuestion.allQuestions.push(this);
}

function storeObject(obj) {
  var stringifiedArray = JSON.stringify(obj);
  localStorage.setItem('vacationObjects', stringifiedArray);
}

function fetchObject(key) {
  var stringifiedArray = localStorage.getItem(key);
  return JSON.parse(stringifiedArray);
}

function createVacationQuestions() {
  new VacationQuestion('If you had the whole day to yourself, you would roam...', 0, 0, 0, 'mountains2', 'old-town', 'beach')
  new VacationQuestion('Which food are you most likely to try ?', 0, 0, 0, 'barbeque', 'pasta2', 'seafood')
  new VacationQuestion('What makes a trip feel truely special for you ?', 0, 0, 0, 'activity', 'EduvationalVacation', 'relaxFriends')
  new VacationQuestion('When it\`s time for a drink, you reach for ...', 0, 0, 0, 'beer', 'wine', 'coctail')
  new VacationQuestion('When the sun goes down, what would you like to do ?', 0, 0, 0, 'campfire', 'club', 'sunset')
  new VacationQuestion('And where would you like to stay ?', 0, 0, 0, 'cabin', 'plaza_hotel', 'resort')

}
createVacationQuestions();
console.log(VacationQuestion.allQuestions);

var quizQuestionsElement = document.getElementById('quizQuestions');
var imageContainerElement = document.getElementById('imageContainer');
var leftImageElement = document.getElementById('leftImage');
var middleImageElement = document.getElementById('middleImage');
var rightImageElement = document.getElementById('rightImage');
// var buttonElement = document.getElementById('buttonHere');
var thisIsTheRealButtonElement = document.getElementById('thisIsTheRealButton');
thisIsTheRealButtonElement.style.visibility = 'hidden';


function displayVacationQuestions(indexNumber) {
  quizQuestionsElement.textContent = VacationQuestion.allQuestions[indexNumber].question;
  leftImageElement.src = VacationQuestion.allQuestions[indexNumber].imagePath1;
  middleImageElement.src = VacationQuestion.allQuestions[indexNumber].imagePath2;
  rightImageElement.src = VacationQuestion.allQuestions[indexNumber].imagePath3;
}
displayVacationQuestions(0);
imageContainer.addEventListener('click', handleImageClick);
var rounds = 0;

function handleImageClick(event) {
  event.preventDefault();
  if (rounds < VacationQuestion.allQuestions.length - 1) {

    if (event.target.src.includes(VacationQuestion.allQuestions[rounds].imagePath1)) {
      VacationQuestion.allQuestions[rounds].timesClickedMtn++;
    } else if (event.target.src.includes(VacationQuestion.allQuestions[rounds].imagePath2)) {
      VacationQuestion.allQuestions[rounds].timesClickedCity++;
    } else if (event.target.src.includes(VacationQuestion.allQuestions[rounds].imagePath3)) {
      VacationQuestion.allQuestions[rounds].timesClickedBeach++;
    }
    rounds++;
    displayVacationQuestions(rounds);
  } else {
    // remove event listener, set button display 
    imageContainer.removeEventListener('click', handleImageClick);
    imageContainerElement.style.display = 'none';
    thisIsTheRealButtonElement.style.visibility = 'visible';
    // local storage
    storeObject(VacationQuestion.allQuestions);
  }

}

buttonElement.addEventListener('click', submitButtonOnOff);
function submitButtonOnOff(event) {
  event.preventDefault();
  // thisIsTheRealButtonElement.setAttribute('href', 'results.html');
  // buttonElement.setAttribute('href', 'results.html');
}


