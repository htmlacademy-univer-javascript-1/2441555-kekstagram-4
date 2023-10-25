function checkLenght(string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrome(string) {
  const newString = string.toLowerCase().replaceAll(' ', '');
  let result = '';
  for (let i = newString.length - 1; i >=0; i--) {
    result += newString[i];
  }
  return newString === result;
}

function getNumbers(stringIn) {
  const string = stringIn.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = parseInt(string[i], 10);
    if (!isNaN(char)) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}
