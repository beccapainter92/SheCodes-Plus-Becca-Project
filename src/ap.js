function displayTemp(response) {
  let tempElement = document.querySelector("#temp-value-summary");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
}

function updateCity(event) {
  event.preventDefault();
  let cityHeader = document.querySelector("#city-header");
  cityHeader.innerHTML = cityResult.value;
  let apiKey = "8t3bb4640173o53eaba9b59f80d9e4f2";
  let city = cityResult.value;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(displayTemp);
}




let cityResult = document.querySelector("#city-input");
let citySearch = document.querySelector("#city-search-box");
citySearch.addEventListener("submit", updateCity);

let currentDate = new Date();

let dayWord = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dayOfWeek = document.querySelector("#day-of-week");
dayOfWeek.innerHTML = dayWord[currentDate.getDay()];

let currentTime = document.querySelector("#current-time");

currentTime.innerHTML = `${currentDate.getHours()}:${currentDate
  .getMinutes()
  .toString()
  .padStart(2, "0")}`;
