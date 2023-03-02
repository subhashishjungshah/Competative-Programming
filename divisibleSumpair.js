function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (i < j) {
        let sum = ar[i] + ar[j];

        if (sum % k === 0) {
          count++;
          console.log("count", count);
        }
      }
    }
  }
  return count;
}

console.log(divisibleSumPairs(10, 3, [29, 97, 52, 86, 27, 89, 77, 19, 99, 96]));
