import SinglyLinkedList from "./singlyLinkedList.js";

// Implement a function isPalindrome(str) where the function returns whether str is a palindrome.
//   Implement 2 versions, both using a singly linked list
//   (1) using push, pop, unshift methods
//    (2) using push and pop methods only

// use a stack of list nodes
// Traverse the given list from head to tail and push every node to stack.
// Traverse the list again. For every node, pop a node from stack and compare data of popped node with currently visited node.
// If all nodes matched, then return true, else false.

const isPalindrome = (str) => {
  const stack = new SinglyLinkedList();
  const compareStack = new SinglyLinkedList();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let front, end;
  while (
    stack.length === 1 ||
    ((end = stack.pop()) && (front = stack.shift()))
  ) {
    if (front != end) {
      return false;
    }
  }
  return true;

  // for (let i = o; i < str.length; i++) {
  //   reversed[i] = stack.pop();
  // }

  // let newStr = reversed.join("");
  // if (str == newStr) {
  //   return "str is a palindrome";
  // } else {
  //   return "str is not a palindrome";
  // }
};

console.log(isPalindrome("testing"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("r"));
