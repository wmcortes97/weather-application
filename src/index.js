import { getDate } from "./utils/getDate";
import { getTime } from "./utils/getTime";
import { setImgSrc } from "./utils/weatherIconDisplayed";
import axios from "axios";

//displaying date and time
let dateDisplayed = document.querySelector("#date-today");
dateDisplayed.innerHTML = `${getDate()} ${getTime()}`;

//temperture converter
let tempDisplayed = document.querySelector(".temperature");
const tempInteger = parseInt(tempDisplayed.textContent);

let fahrenheit = document.querySelector(".fahrenheit");
fahrenheit.addEventListener("click", (e) => {
  let conversion = [tempInteger * (9 / 5)] + 32;
  tempDisplayed.innerHTML = conversion;
});

let celsius = document.querySelector(".celsius");
celsius.addEventListener("click", (e) => {
  let conversion = (tempInteger - 32) * (5 / 9);
  tempDisplayed.innerHTML = conversion;
});

//displaying temperture data
let apiKey = "e158e30a8e642685a11d3f2e3848c46d";
let cityInput = document.querySelector("#city-input");
let form = document.querySelector("form");
let cityDisplayed = document.querySelector("#city-displayed");
let windDisplayed = document.getElementById("wind");
// let weatherIconDisplayed = document
//   .getElementById("weather-icon img")
//   .getAttribute("src");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=${apiKey}`;

  axios
    .get(apiUrl)
    .then((response) => {
      // Handle the API response here
      console.log(response.data);
      tempDisplayed.innerHTML = response.data.main.temp;
      windDisplayed.innerHTML = response.data.wind.speed;
      cityDisplayed.innerHTML = response.data.name;
      setImgSrc(response.data.weather[0].main);
    })
    .catch((error) => {
      // Handle any errors that occur during the API request
      console.error(error);
      cityDisplayed.innerHTML = "Please enter a valid city";
    });
});
