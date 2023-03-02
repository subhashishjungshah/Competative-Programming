function dayOfProgrammer(year) {
  let julianCalender;
  let gregorianCalender;
  if (year >= 1700 && year <= 1917) {
    julianCalender = true;
  } else {
    gregorianCalender = true;
  }
  if (julianCalender) {
    if (year % 4 === 0) {
      return `12.09.${year}`;
    } else {
      return `13.09.${year}`;
    }
  } else if (year === 1981) {
    return `26.09.${1981}`;
  } else {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return `12.09.${year}`;
    } else {
      return `13.09.${year}`;
    }
  }
}

const date = dayOfProgrammer(2000);
console.log(date);
