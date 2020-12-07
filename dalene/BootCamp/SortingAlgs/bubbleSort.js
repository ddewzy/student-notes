// bubble sort will take success of passes threw an array ware on each pass we will compar each item to its next adjacent neighbor if they are out of order we will swap them
//observation 1. after completion of one pass last item in array is in order
//2. if we make no swaps in a pass the array i ordered

function defaultComparer(a, b) {
  const aString = a.toString();
  const bString = b.toString();
  if (aString === bString) {
    return 0;
  } else if (aString > bString) {
    return 1;
  }
  return -1;
}

function bubbleSort(arr, compare = defaultComparer) {
  let noSwap;
  for (
    let unSortedLength = arr.length;
    unSortedLength > 1;
    unSortedLength = unSortedLength - noSwap - 1
  ) {
    noSwap = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (compare(arr[i], arr[i + 1]) > 0) {
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        noSwap = 0;
      } else {
        noSwap++;
      }
    }
  }
}
let arr = [1, 3, 5, 2, 4, 9, 6, 5];
bubbleSort(arr);
console.log(arr);
