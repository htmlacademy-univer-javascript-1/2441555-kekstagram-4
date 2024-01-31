function checkLenght(string, maxLength) {
  return string.length <= maxLength;
}

checkLenght('asfcs', 10);

function isPalindrome(string) {
  const newString = string.toLowerCase().replaceAll(' ', '');
  let result = '';
  for (let i = newString.length - 1; i >=0; i--) {
    result += newString[i];
  }
  return newString === result;
}

isPalindrome('asdsa');

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

getNumbers('jhv 45.4');

function isInWorkTime(dayStart, dayEnd, workStart, workTime) {
  const workStartHM = workStart.split(':');
  const workStartHour = Number(workStartHM[0]);
  const workStartMin = Number(workStartHM[1]);

  const dayStartHM = dayStart.split(':');
  const dayStartHour = Number(dayStartHM[0]);
  const dayStartMin = Number(dayStartHM[1]);

  if (workStartHour >= dayStartHour && workStartMin >= dayStartMin) {
    const minutes = workStartHour * 60 + workStartMin + workTime;

    const workEndHour = (minutes - (minutes % 60)) / 60;
    const workEndMin = minutes % 60;

    const dayEndHM = dayEnd.split(':');
    const dayEndHour = Number(dayEndHM[0]);
    const dayEndMin = Number(dayEndHM[1]);

    if (workEndHour <= dayEndHour && workEndMin <= dayEndMin) {
      return true;
    }
  }
  return false;
}

isInWorkTime('08:00', '17:30', '14:00', 90); // true
isInWorkTime('8:0', '10:0', '8:0', 120);     // true
isInWorkTime('08:00', '14:30', '14:00', 90); // false
isInWorkTime('14:00', '17:30', '08:0', 90);  // false
isInWorkTime('8:00', '17:30', '08:00', 900); // false
