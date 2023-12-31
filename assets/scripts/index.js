import { getTasks } from "./todo.js";
import { showDateAndTime } from "./dateAndTime.js";
import { showWeatherInfo } from "./weather.js";

document.addEventListener("DOMContentLoaded", async () => {
  getTasks();
  await showDateAndTime();
  await showWeatherInfo();
});
