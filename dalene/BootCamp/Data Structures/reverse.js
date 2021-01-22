import SinglyLinkedList from "./singlyLinkedList";

const reverse = (str) => {
  const stack = new SinglyLinkedList();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  const reversed = new Array(str.length);
  for (let i = o; i < str.length; i++) {
    reversed[i] = stack.pop();
  }
  return reversed.join("");
};

console.log(reverse("testing"));
console.log(reverse("another string"));
console.log(reverse("rececar"));
