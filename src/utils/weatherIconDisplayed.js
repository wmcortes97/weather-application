function setImgSrc(temp) {
  let imgElement = document.getElementById("weather-icon");
  if (temp === "Clear") {
    imgElement.innerHTML = "images/day.svg";
  }
  if (temp === "Clouds") {
    imgElement.src = "images/cloudy-day-3.svg";
  }
}

export { setImgSrc };
