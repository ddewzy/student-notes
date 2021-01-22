import SinglyLinkedList from "./SinglyLinkedList";

const numLines = 2;
const maxLength = 5;
const maxEnqueueMs = 3000;
const maxDequeueMS = 4000 * numLines;

const lines = [];

const getTimeout = (maxTimeout) => {
  return Math.random() * maxTimeout;
};

for (let i = 0; i < numLines; i++) {
  lines[i] = new SinglyLinkedList();
}

const openLine = () => {
  const newLine = new SinglyLinkedList();
  lines.push(newLine);
  numLines++;

  return newLine;
};

const checkout = () =>
  setTimeout(() => {
    const person = Date.now();

    let smallest = lines.reduce(
      (min, element) => (element.length < min.length ? element : min),
      lines[0]
    );

    if (smallest.length >= maxLength) {
      smallest = openLine();
    }

    console.log(`${person} got into line`);
    smallest.unshift(person);
    checkout();
  }, getTimeout(maxEnqueueMs));

checkout();

const cashierReady = (cashier) =>
  setTimeout(() => {
    const person = lines[cashier].pop();
    console.log(`${person} checking out in line ${cashier}`);
    cashierReady();
  }, getTimeout(maxDequeueMs));

for (let i = 0; i < minLines; i++) {
  cashierReady(i);
}
