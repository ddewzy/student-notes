//this is a multiple pointers problem
//merge two arrays
const merge = (first, second) => {
  const result = [];
  //this is where we start at each point in the array
  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < first.length && secondIndex < second.length) {
    if (first[firstIndex] < second[secondIndex]) {
      result.push(first[firstIndex++]);
    } else {
      result.push(second[secondIndex++]);
    }
  }

  result.push(...first.slice(firstIndex));
  result.push(...second.slice(secondIndex));
  return result;
};
// const firstArr = [23, 25, 80];
// const secondArr = [5, 30, 100];

// const result = merge(firstArr, secondArr);
// console.log(result);
//split and sort then put back together
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr; //base case
  const midPoint = Math.ceil(arr.length / 2); //split arr in half
  const left = mergeSort(arr.slice(0, midPoint));
  const right = mergeSort(arr.slice(midPoint));
  return merge(left, right);
};

const result = mergeSort([4, 2, 7, 99, 13, 6, 12, 5, 1, 76]);
console.log(result);
