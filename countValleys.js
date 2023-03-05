function countingValleys(steps, path) {
  // Write your code here
  let switcher = false;
  let seaLevel = 0;
  let valleyCount = 0;

  for (i of path) {
    seaLevel = i == "D" ? seaLevel - 1 : seaLevel + 1;
    if (seaLevel == -1) {
      switcher = true;
    }
    if (switcher && seaLevel == 0) {
      valleyCount++;
      switcher = false;
    }
  }
  return valleyCount;
}

countingValleys(8, "UDDDUDUU");
