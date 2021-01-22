import SinglyLinkedList from "./singlyLinkedList.js";
// queue is FIFO
// use unshift and pop add to front and take from the end
const list = new SinglyLinkedList();
const lane2 = new SinglyLinkedList();
let length = 0;
// Extend the lab to:
// 1) Have a maximum queue size
// 2) implement multiple queues, having the person queue up in the smallest queue available
// hint: for (2), you will still have one function (addKart) that will choose when someone is ready to checkout and choose which line to unshift(). However, you will need separate functions for EACH line to check if there is someone ready and pop().
// addKart fills each line to capacity and then the next kart created should be shifted to next line that is shortest.  If all next lines are the same length then unshift(kart) to new SinglyLinked list. if all lines are full wait in queue save node in a variable until a space is freed up.
// removeKart needs to randomly delete a kart(s) from the lines after set amount of time out when line is full
// encapsulation of randomness
const getInterval = () => {
  return Math.random() * 2000;
};
// control flow/loop stopping condition use length of list as a stopping point setTimeout(( => {}))
const addKart = () =>
  setTimeout(() => {
    let kart = Date.now();
    list.unshift(kart);
    //   if condition is met then shift to shortest line
    if (list.length > 5) {
      console.log("Sorry this line is full");
      let lane2Kart = kart;
      console.log(lane2Kart + "this is list two");
      // this function only adds one cart to lane. Need to fill lane (lane2.length line 43 returns list size 1)
      const secondSinglyLinkedList = () => {
        lane2.unshift(lane2Kart);
        if (lane2.length > 5) {
          console.log("Sorry lane 2 is full");
        }
      };
      secondSinglyLinkedList();
      console.log("this is lane 2");
      console.log(
        `added ${lane2Kart} lane2Kart to lane 2, size = ${lane2.length}`
      );
    } else {
      addKart();
      console.log(`added ${kart} kart to line, size = ${list.length}`);
    }
  }, getInterval());
//   need to leverage functionality of removeKart to work on lane2
const removeKart = () =>
  setTimeout(() => {
    if (list.length >= 5) {
      // use math.random to delete Karts from list
      let kart = list.pop();
      removeKart();
      console.log(`deleted ${kart} kart from line, size = ${list.length}`);
    } else {
      removeKart();
    }
  }, getInterval());
addKart();
removeKart();
// secondSinglyLinkedList();
// cutting line (insert)
//*******Maximum line size (conditional this.length) implement and determine where that should be coded
// changing lines (remove(), queue())
// finding shortest line (conditional this.length)
// implementing multiple queues (queue()) how does a kart find the shortest line
// ******calling enqueue and dequeue are functions that are associated with one list call pop() and shift() when using multiple lines
// some process that at random intervals will add to a queue() and will also at random intervals delete from dequeue()
// math.random, queue(), dequeue(), set interval setTimeOut() stochastic vs deterministic
