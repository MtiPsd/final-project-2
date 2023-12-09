// https://kaaryar0506reactblog.liara.run/current/time
// https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light

import {
  formatIslamicHijriDate,
  formatMiladiDate,
  formatShamsiDate,
  formatTime,
  getPersonNumbers,
} from "./utils.js";

const timeElem = document.querySelector(".time__part > h3");
const shamsiDateElem = document.querySelector(".time__part > h4");
const hijriDateElem = document.querySelector(".lunar-date > p");
const miladiDateElem = document.querySelector(".christian-date > p");

async function getTime() {
  try {
    const res = await fetch(
      "https://kaaryar0506reactblog.liara.run/current/time",
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error getting date & time:`, error.message);
  }
}

async function showDateAndTime() {
  const data = await getTime();
  const islamicHijriDate = formatIslamicHijriDate(data.islamicHijri);
  const miladiDate = formatMiladiDate(data.miladi);
  const shamsiDate = formatShamsiDate(data.shamsi);
  const time = formatTime(data.current);

  timeElem.textContent = time;
  hijriDateElem.textContent = islamicHijriDate;
  miladiDateElem.textContent = miladiDate;
  shamsiDateElem.textContent = shamsiDate;
}

showDateAndTime();

// formatIslamicHijriDate(islamicHijri);
