//get color from starting location
//iterate through array of coordinate
//only look at pixels connected
//once iterated over change color of pixels
//look for all paths not just one
//arr[startY][startX] arr[y][x]

const picture = [
  [0, 0, 2, 2, 2, 0],
  [0, 0, 2, 0, 2, 0],
  [0, 0, 2, 0, 2, 0],
  [0, 0, 2, 2, 2, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
function fill(arr, color, startX, startY) {
  //out of bounds case

  if (
    startY < 0 ||
    startX < 0 ||
    startY >= arr.length ||
    startX >= arr[0].length
  ) {
    return;
  }

  const oldColor = arr[startY][startX];

  function helper(x, y) {
    if (arr[y][x] !== oldColor) {
      return;
    }
    arr[y][x] = color;

    //right bound
    if (x + 1 < arr[0].length) {
      helper(x + 1, y);
    }
    //bottom bound
    if (y + 1 < arr[0].length) {
      helper(x, y + 1);
    }
    //left bound
    if (x - 1 >= 0) {
      helper(x - 1, y);
    }
    //top bound
    if (y - 1 >= 0) {
      helper(x, y - 1);
    }
    helper(startX, startY);
  }
}
fill(picture, 5, 0, 0);
console.table(picture);
