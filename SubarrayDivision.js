function birthday(s, d, m) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < m; j++) {
      sum = s[j + i] + sum;
    }
    if (sum === d) {
      count++;
    }
    sum = 0;
  }
  return count;
}
birthday([1, 2, 1, 3, 2], 3, 2);
