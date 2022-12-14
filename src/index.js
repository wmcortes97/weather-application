//Displaying the date
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDate() {
  let dateInfo = new Date();
  let day = week[dateInfo.getDay()];
  let date = dateInfo.getDate();
  let month = months[dateInfo.getMonth()];
  let year = dateInfo.getFullYear();

  return `${day}, ${month} ${date}, ${year}`;
}

function getTime() {
  let timeInfo = new Date();
  let hour = timeInfo.getHours();
  let minutes = timeInfo.getMinutes();
  let time;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour === 12) {
    time = `${hour}:${minutes} PM`;
  } else if (hour > 13) {
    time = `${hour - 12}:${minutes} PM`;
  } else {
    time = `${hour}:${minutes} AM`;
  }
  return time;
}

let displayedDate = document.querySelector("#date-today");
displayedDate.innerHTML = `${getDate()} ${getTime()}`;

//Displaying the city

let cityDisplayed = document.querySelector("#city-displayed");
let cityInput = document.querySelector("#city-input");
let form = document.querySelector("form");
// let citySearchBtn = document.querySelector(".city-search");

form.addEventListener("submit", (e) => {
  cityDisplayed.innerHTML = cityInput.value;
});

//changing F or C
let tempertureDisplayed = document.querySelector(".temperature");
const tempInteger = parseInt(tempertureDisplayed.textContent);

let fahrenheit = document.querySelector(".fahrenheit");
let celsius = document.querySelector(".celsius");

fahrenheit.addEventListener("click", (e) => {
  let conversion = [tempInteger * (9 / 5)] + 32;
  tempertureDisplayed.innerHTML = conversion;
});

celsius.addEventListener("click", (e) => {
  let conversion = (tempInteger - 32) * (5 / 9);
  tempertureDisplayed.innerHTML = conversion;
});
