function sockMerchant(n, ar) {
  // Write your code here
  let demArr = {};
  let unpairs = 0;
  ar.forEach((element) => {
    if (demArr[element]) {
      demArr[element] = ++demArr[element];
    } else {
      demArr[element] = 1;
    }
  });
  for (let num in demArr) {
    if (demArr[num] % 2 !== 0) {
      unpairs++;
    }
  }
  return (ar.length - unpairs) / 2;
}
sockMerchant(9, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
