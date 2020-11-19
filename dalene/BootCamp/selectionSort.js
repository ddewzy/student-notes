let minNum = (arr, startIdx) => {
  let smIndex = startIdx;
  for (let i = startIdx + 1; i < arr.length; i++) {
    if (arr[i] < arr[smIndex]) {
      smIndex = i;
    }
  }
  return smIndex;
};
let swap = (arr, idx1, idx2) => {
  let pHolder = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = pHolder;
};
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = minNum(arr, i);
    swap(arr, min, i);
  }
  return arr;
}
let myArr = [3, 9, 6, 1, 5, 2];
let result = selectionSort(myArr);
console.log(result);
console.log(myArr === result);
