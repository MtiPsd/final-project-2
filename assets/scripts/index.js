let map = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
function getPersonNumbers(str) {
  let newStr = "";
  str = String(str);

  for (let i = 0; i < str.length; i++) {
    newStr += map[parseInt(str.charAt(i))];
  }
  return newStr;
}

////////////////////////////////////
