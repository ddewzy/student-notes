// this is the partition
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function partition(arr, low, high) {
  const pivot = arr[low];
  let swapIndex = low;
  for (let i = low + 1; i <= high; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, ++swapIndex);
    }
  }
  swap(arr, low, swapIndex);
  return swapIndex;
}
const arr = [3, 1, 6, 7, 2, 4];
partition(arr, 0, 5);
console.log(arr);
