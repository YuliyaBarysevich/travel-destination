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
var pElement = document.getElementById('resultsText')


function getResults() {
  for (var i = 0; i < resurrectedDataArray.length; i++) {
    totalMtnClick += resurrectedDataArray[i].timesClickedMtn;
    totalCityClick += resurrectedDataArray[i].timesClickedCity;
    totalBeachClick += resurrectedDataArray[i].timesClickedBeach;
  }
  if (totalMtnClick > totalCityClick && totalMtnClick > totalBeachClick) {
    h3Element.textContent = "Congratulations, Mountain MAN";
    resultsImageElement.src = "img/zion.jpeg";
    pElement.textContent = "Zion\’s landscape is filled with rainbow-colored rock layers chiseled into sharp peaks, high mesas, and deep, twisting canyons. It\’s a place so hauntingly beautiful that you will never forget the silence of Zion\’s sandstone cathedrals, the light reflecting off the slot canyons, the rushing Virgin River, or the architect of its cliffs and canyons. Everyone should visit Zion at least once in their lifetime to hike its trails, wade through canyon waters, and watch deer graze in open meadows. Named by early settler Isaac Behunin in 1863, Zion remains true to its name—the Promised Land and a place of refuge."
  } else if (totalCityClick > totalMtnClick && totalCityClick > totalBeachClick) {
    h3Element.textContent = "Congratulations, City slicker";
    resultsImageElement.src = "img/boston.png"
    pElement.textContent = "Boston is one of the oldest US cities. The first subway system in the US was built in Boston in 1897. The first US light house was built in the Boston Harbor in 1716. On top of all that, Boston is also where the first phone call was made. Known as the \"Cradle of Modern America\", this city is full of history and culture and it is definitely worth checking out."
  } else if (totalBeachClick > totalMtnClick && totalBeachClick > totalCityClick) {
    h3Element.textContent = "Congratulations, Beach BOY";
    resultsImageElement.src = "img/hawaii.jpg";
    pElement.textContent = "From families to romance seekers, from nature lovers to adventurers, from water sports enthusiasts to hikers, from activity seekers to beach chillers: this magical chain of islands in the middle of the Pacific Ocean has it all. The 6 main islands of Hawaii are. Kauai - the Garden Isle is home to some of the most dramatic scenery in the South Pacific. Oahu - the Heart of Hawaii is home to the capital city of Honolulu and legendary surf towns like Haleiwa. Molokai - true to its island roots, Molokai is filled with rustic charm and epic beauty. Lanai - island of contradictions that balances restful luxury with rugged terrain. Maui - from its famous beaches to the peak of Haleakala, Maui offers a wealth of unforgettable experiences. Big Island of Hawaii - from active volcanoes to coffee farms and beautiful beaches to rich history, theres lots to see and do on the island of Hawaii."
  } else if (totalBeachClick == totalMtnClick || totalBeachClick == totalCityClick || totalMtnClick == totalCityClick) {
    h3Element.textContent = "Congratulations, you get to go to California !";
    resultsImageElement.src = "img/cali.jpg"
    pElement.textContent = "There are many reasons to visit California because there\’s something for everyone in the Golden State – fun, adventure, beauty, and history await you in this particular West Coast state. Of course, what would California be without its infamous weather? The weather is still great, but now the scenery and weather is just fabulous. Lather on the sunscreen and be prepared to enjoy temperatures of around 70℉ wherever you’re going. Kids and adults alike will never tire of California\’s theme parks. There’s Universal Studios Hollywood, Magic Mountain, Discovery Kingdom, Boomerang Bay and, of course, Disneyland. These are the places to go to make memories that you and your loved ones will truly never forget."
  }
  displayResults();
}

getResults();


function displayResults() {

}
