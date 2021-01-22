// take in an array console.log the sum of each adjacent pair [1,2,3]
// output: 3  5
function adjacentSums(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //we will inspect i, i+1
    console.log(arr[i] + arr[i + 1]);
  }
}
//[1,2,3,4]
function tripleSums(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    console.log(arr[i] + arr[i + 1] + arr[i + 2]);
  }
}
function nSum(arr, n) {
  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum = sum + arr[i + j];
    }
    console.log(sum);
  }
}
