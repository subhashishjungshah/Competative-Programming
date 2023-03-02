function migratoryBird(arr) {
  let countMax = 0;
  let type = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    arr.forEach((element) => {
      if (element === arr[i]) {
        count++;
      }
    });
    if (countMax < count) {
      countMax = count;
      type = arr[i];
    } else if (countMax === count && type > arr[i]) {
      type = arr[i];
    }
  }
  return type;
}

console.log(migratoryBird([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
