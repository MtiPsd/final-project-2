import { formatDecimal, hideSpinner, showSpinner } from "./utils.js";

const degreeElem = document.querySelector(".weather__degree > h3");
const funnyText = document.querySelector(".weather__funny > p");
const emojiStatus = document.querySelector(".weather__emoji");
const weatherImg = document.querySelector(".weather__img");
const max = document.querySelector(".weather__status--max");
const min = document.querySelector(".weather__status--min");
const spinner = document.querySelector(".loading-container");
const timePart = document.querySelector(".time__part");
const weatherPart = document.querySelector(".weather__part");

// show the loading indicator before
// sending request to the server
showSpinner(timePart, weatherPart, spinner);

async function getWeatherInfo() {
  try {
    showSpinner(timePart, weatherPart, spinner);
    const res = await fetch(
      "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light",
    );
    const data = await res.json();
    console.log(data);
    return data.at(0);
  } catch (error) {
    console.error(`Error getting weather info:`, error.message);
  } finally {
    hideSpinner(timePart, weatherPart, spinner);
  }
}

export async function showWeatherInfo() {
  const data = await getWeatherInfo();

  if (data) {
    degreeElem.textContent = `${formatDecimal(data.current)}°`;
    funnyText.textContent = data.customDescription.text;
    const iconCode = data.weather.icon;
    weatherImg.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${iconCode}.png`,
    );
    emojiStatus.innerHTML = data?.customDescription.emoji;
    max.textContent = formatDecimal(data.max);
    min.textContent = formatDecimal(data.min);
  }
}
