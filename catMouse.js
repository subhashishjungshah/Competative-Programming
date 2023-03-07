function catAndMouse(x, y, z) {
  let distanceCatAmouse = Math.abs(x - z);
  let distanceCatBmouse = Math.abs(y - z);
  if (distanceCatAmouse < distanceCatBmouse) console.log("Cat A");
  else if (distanceCatBmouse < distanceCatAmouse) console.log("Cat B");
  else console.log("Mouse C");
}

catAndMouse(2, 5, 4);
