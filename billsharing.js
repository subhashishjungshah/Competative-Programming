function bonAppetit(bill, k, b) {
  // Write your code here
  let sum = 0;
  let actualPay = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i === k) {
      continue;
    }
    sum += bill[i];
    actualPay = Math.floor(sum / 2);
  }
  console.log(actualPay);
  if (actualPay === b) {
    console.log(b);
  } else {
    console.log(b - actualPay);
  }
}
bonAppetit([3, 10, 2, 9], 1, 12);
