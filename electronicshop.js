function getMoneySpent(keyboards, drives, b) {
  let max = 0;
  let newPriceArr = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sum = 0;
      sum += keyboards[i] + drives[j];
      newPriceArr.push(sum);
      sum = 0;
    }
  }
  newPriceArr.forEach((element) => {
    if (element > max && element <= b) {
      max = element;
    }
  });
  if (max === 0) {
    console.log(-1);
  } else {
    console.log(max);
  }
}

getMoneySpent([4], [5], 5);
