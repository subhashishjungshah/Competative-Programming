function pageCount(n, p) {
  let middlePage = Math.floor(n / 2); //10
  let turns = Math.floor(p / 2); // 10
  // yesle agadi bata calculate garcha
  if (turns < middlePage - turns) {
    return turns;
  }
  // yesle pachadi bata calculate garcha
  else {
    return middlePage - turns; // 8
  }
}

console.log(pageCount(20, 20));
