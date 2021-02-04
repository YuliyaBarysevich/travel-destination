'use strict';
// make sure the array is in order of: 6 questions, with Mtn, City, Beach
var imagesArray = ['mountains2', 'old-town', 'beach', 'barbeque', 'pasta2', 'seafood', 'activity', 'EducationalVacation', 'relaxFriends', 'beer', 'wine', 'coctail', 'campfire', 'club', 'sunset', 'cabin', 'plaza_hotel', 'resort', 'mtnBoots', 'cityBoots', 'flip-flops', 'family', 'friends', 'couple'];

VacationQuestion.allQuestions = [];

function VacationQuestion(question, timesClickedMtn, timesClickedCity, timesClickedBeach, imageName1, imageName2, imageName3, insightText) {
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
  this.insightText = insightText;
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
  new VacationQuestion('If you had the whole day to yourself, you would roam...', 0, 0, 0, 'mountains2', 'old-town', 'beach', 'Studies show that money spent on travel makes you happier than money spent on material goods.')
  new VacationQuestion('Which food are you most likely to try ?', 0, 0, 0, 'barbeque', 'pasta2', 'seafood', 'Benefits of travel are almost immediate. After only a day or two, 89% of people experience significant drops in stress.')
  new VacationQuestion('What makes a trip feel truely special for you ?', 0, 0, 0, 'activity', 'EducationalVacation', 'relaxFriends', '82% of employers think traveling makes you more employable.')
  new VacationQuestion('When it\`s time for a drink, you reach for ...', 0, 0, 0, 'beer', 'wine', 'coctail', 'Studies show that money spent on travel makes you happier than money spent on material goods.')
  new VacationQuestion('When the sun goes down, what would you like to do ?', 0, 0, 0, 'campfire', 'club', 'sunset', 'In 1964, San Francisco’s cable cars were named the first moving National Historic Landmark. The San Francisco cable cars are the only ones still operating in a U.S')
  new VacationQuestion('And where would you like to stay ?', 0, 0, 0, 'cabin', 'plaza_hotel', 'resort', 'A 2010 study discovered that going on vacation doesn’t necessarily make you happier. The mere anticipation of the time off results in higher levels of reported happiness. A perfectly good reason to start planning your next vacation right now!')
  new VacationQuestion('What shoes do you like to walk in?', 0, 0, 0, 'mtnBoots', 'cityBoots', 'flip-flops', 'Taking vacations can make you more creative and become a better problem solver.')
  new VacationQuestion('Who are you going to travel with?', 0, 0, 0, 'family', 'friends', 'couple', 'Every country in European Union, by law, has at least four weeks of paid vacation. The United States is the only developed country in the world without a single legally required paid vacation day.')

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
thisIsTheRealButtonElement.style.display = 'none';
// added h4 tag - important if you do tag name you have to add index number!!!
var h4Element = document.getElementsByTagName('h4')[0];
var asideElement = document.getElementById("insightsHere")
var asidePicElement = document.getElementById('aside-pic')


function displayVacationQuestions(indexNumber) {
  quizQuestionsElement.textContent = VacationQuestion.allQuestions[indexNumber].question;
  leftImageElement.src = VacationQuestion.allQuestions[indexNumber].imagePath1;
  middleImageElement.src = VacationQuestion.allQuestions[indexNumber].imagePath2;
  rightImageElement.src = VacationQuestion.allQuestions[indexNumber].imagePath3;
  asideElement.textContent = VacationQuestion.allQuestions[indexNumber].insightText;
}
displayVacationQuestions(0);
imageContainer.addEventListener('click', handleImageClick);
var rounds = 0;

function handleImageClick(event) {
  event.preventDefault();
  if (rounds < VacationQuestion.allQuestions.length) {

    if (event.target.src.includes(VacationQuestion.allQuestions[rounds].imagePath1)) {
      VacationQuestion.allQuestions[rounds].timesClickedMtn++;
    } else if (event.target.src.includes(VacationQuestion.allQuestions[rounds].imagePath2)) {
      VacationQuestion.allQuestions[rounds].timesClickedCity++;
    } else if (event.target.src.includes(VacationQuestion.allQuestions[rounds].imagePath3)) {
      VacationQuestion.allQuestions[rounds].timesClickedBeach++;
    }
    rounds++;
    // added if statement to handle display and counter
    if (rounds < VacationQuestion.allQuestions.length) {
      displayVacationQuestions(rounds);
      console.log('hello there this is number ', rounds + 1)
    } else {
      // wrapped all these statements in a function to be able to use it at either place
      displayButtonNext();
    }

  } else {
    // this is the other place - wrapped in a function 
    displayButtonNext();
    // remove event listener, set button display 
    // imageContainer.removeEventListener('click', handleImageClick);
    // imageContainerElement.style.display = 'none';
    // thisIsTheRealButtonElement.style.visibility = 'visible';
    // local storage
    // storeObject(VacationQuestion.allQuestions);
  }

}

function displayButtonNext() {
  // remove event listener, set button display 
  imageContainer.removeEventListener('click', handleImageClick);
  imageContainerElement.style.display = 'none';
  thisIsTheRealButtonElement.style.display = 'block';
  // local storage
  storeObject(VacationQuestion.allQuestions);
  // change text in h3
  quizQuestionsElement.textContent = 'Please click the button below to see your results';
  h4Element.style.display = 'none';
  asideElement.style.display = 'none';
  asidePicElement.style.display = 'none';
}

// buttonElement.addEventListener('click', submitButtonOnOff);
// function submitButtonOnOff(event) {
//   event.preventDefault();
  // thisIsTheRealButtonElement.setAttribute('href', 'results.html');
  // buttonElement.setAttribute('href', 'results.html');
// }


