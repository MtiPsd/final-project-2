export function convertPersonNumbers(str) {
  let map = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let newStr = "";
  str = String(str);

  for (let i = 0; i < str.length; i++) {
    newStr += map[parseInt(str.charAt(i))];
  }
  return newStr;
}

////////////////////////////////////

export function formatDecimal(number) {
  return convertPersonNumbers(number.toString().split(".").at(0));
}

export function saveDataToLocalStorage(key, data) {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
    console.log(`Data saved successfully with key: ${key}`);
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
}

export function getDataFromLocalStorage(key) {
  try {
    const jsonData = localStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : null;
  } catch (error) {
    console.error("Error retrieving data from local storage:", error);
    return null;
  }
}

//////////////////////////

export function formatIslamicHijriDate(islamicHijri) {
  const dayInMonth = islamicHijri.dayInMonth.padStart(2, "0");
  const formattedYear = convertPersonNumbers(
    islamicHijri.year.split(" ").at(0),
  );
  const formattedDay = convertPersonNumbers(dayInMonth);
  return `${formattedYear}/${islamicHijri.month}/${formattedDay}`;
}

export function formatMiladiDate(miladi) {
  const monthAbbreviation = miladi.month
    .substring(0, 3)
    .toLowerCase();
  const formattedYear = convertPersonNumbers(miladi.year);
  const formattedDay = convertPersonNumbers(
    miladi.dayInMonth.padStart(2, "0"),
  );

  return `${formattedYear}/${monthAbbreviation}/${formattedDay}`;
}

export function formatShamsiDate(shamsi) {
  return `${shamsi.dayInMonth} ${shamsi.month}`;
}

export function formatTime(currentTimestamp) {
  const date = new Date(currentTimestamp);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${convertPersonNumbers(hours)}:${convertPersonNumbers(
    minutes,
  )}`;
}

export function showSpinner(timePart, weatherPart, spinner) {
  timePart.style.display = "none";
  weatherPart.style.display = "none";
  spinner.style.display = "flex";
}

export function hideSpinner(timePart, weatherPart, spinner) {
  timePart.style.display = "flex";
  weatherPart.style.display = "flex";
  spinner.style.display = "none";
}
