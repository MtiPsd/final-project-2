let map = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
function getArabicNumbers(str) {
  var newStr = "";
  str = String(str);
  for (i = 0; i < str.length; i++) {
    newStr += map[parseInt(str.charAt(i))];
  }
  return newStr;
}
