// Problem 1:
// Write a function countOccurrence(arr, items) that will return the number of elements in items that also exists in arr. Both items and arr are arrays
// function countOccurrence(arr, items) {
//   let e = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < items.length - 1; ) {
//       if (i === j) {
//         e++;
//       }
//       j++;
//     }
//   }
//   return e;
// }
//solving in sets //also works for objects, strings & integers.
// function countOccurrence(arr, items) {
//     const arrSet = new Set(arr);
//     const itemsSet = new Set(items);

//     const unionSet = new Set([...arr, ...items]);

// //unionSet length = arr Set length + item set length- # items in common
// //unionSet length + #items in common = arr set length + item set length
// //#items in common = arr set length + item set length - union set length
//     const itemsInCommon = arrSet.size + itemsSet.size - unionSet.size;
//     return itemsInCommon;
// }

//solving multiple pointers with comparer
const defaultComparer = (first, second) => {
  const firstStr = first.toString();
  const secondStr = second.toString();

  if (firstStr === secondStr) {
    return 0;
  }
  if (firstStr > secondStr) {
    return 1;
  }
  return -1;
};
//reverse Comparer //curried function returns a function
const reverseComparer = (comparer) => (a, b) => {
  return -1 * comparer(a, b);
};
//higher order function
const getCountOccurrence = (comparer = defaultComparer) => (arr, items) => {
  let arrIndex = 0;
  let itemsIndex = 0;
  let count = 0;

  arr.sort(comparer);
  items.sort(comparer);

  while (arrIndex < arr.length && itemsIndex < items.length) {
    if (comparer(arr[arrIndex], items[itemsIndex]) === 0) {
      count++;
      arrIndex++;
      itemsIndex++;
    } else if (comparer(arr[arrIndex], items[itemsIndex]) > 0) {
      itemsIndex++;
    } else {
      arrIndex++;
    }
  }
  return count;
};
const countNumberOccurrence = getCountOccurrence((a, b) => a - b);

// Examples:
console.log(countNumberOccurrence([1, 2, 3, 4], [2, 4, 10])); //returns 2
console.log(getCountOccurrence()(["a", "d", "f"], ["a", "q"])); //return 1

// Please complete Problem 1 and begin Problem 2. Be prepared to answer:
//Q  how Problem 1 can inform the solution for Problem 2?
//A  prob 1 lets us know what items are the same so se know witch items we need to remove.

//Q what are some other example inputs/outputs for Problem 2?
//A  add, remove, whatCharacters, howManyCharacters,

//Q What are the differences and similarities for when isAdd is true, versus when isAdd is false?
//A  when its true there is something from payload that needs added to characters and when false something needs to be removed from characters.

// Problem 2:
// We are working for the Pokemon company and we want to know what the affect of adding or removing Pokemon characters will be. We know what the list of our characters are and what characters we want to add (or remove) are. What we want to know is this: by how much will the number of Pokemon characters change after performing this operation? That is, how many characters will we add? How many will we remove?
// We have one difficulty in performing this task. Our list of characters to add or remove (let's call this a "payload") may or may not be in our original list of characters because it is really difficult for us to keep track of our current list of characters at all times. That is, we might try to add characters that already exist, or remove characters that are not in our list.

// Write a function countDifference(characters, payload, isAdd) that will predict the change in number of characters. A negative number should be given for removals. Use countOccurrence() completed above in your solution.

function countDifference(characters, payload, isAdd) {
  const payloadSet = [...new Set(payload)];
  const countOccurrence = getCountOccurrence();

  const occurrences = countOccurrence(characters, payload);
  const numNewItemsInPayload = payloadSet.length - occurrences;

  return isAdd ? numNewItemsInPayload : -1 * occurrences;
}

// Examples:
console.log(
  countDifference(["Gloria", "Red", "Green"], ["Blue", "Green"], true)
); // returns 1 because we need to add "Blue"
console.log(
  countDifference(["Gloria", "Red", "Green"], ["Blue", "Green"], false)
); // returns -1 because we need to remove "Green" (edited)
