function getPersonNumbers(str) {
  let map = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let newStr = "";
  str = String(str);

  for (let i = 0; i < str.length; i++) {
    newStr += map[parseInt(str.charAt(i))];
  }
  return newStr;
}

////////////////////////////////////

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
