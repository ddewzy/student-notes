//the first loop is grabbing the item
//the second loop is inserting the item
const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        //swap
        //save off the one that you overwrite first
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
};

insertion([6, 3, 9, 1, 4, 8]);
console.log(insertion(arr));
