//Declarations;
//Declare a variable called testVariable that may be set at a later time
let testVariable = "";
//Declare a variable called myName that stores your name, and disallow it from being modified
let myName = "dalene";
//Declare a variable called computers that stores how many computers you have, and allow it to be modified at a later time
let computers = 1;

//Object Literals
//Declare a new object called person and track the person’s name and number of computers in the object
const person = {
  name: "",
  computers: 0,
};

//Expressions
//Write an expression adding two numbers.
let a = 5;
let b = 1;
let x = a + b;

//Write an expression to concatenate two strings: myStr and mySecondStr
let concatenate = "myStr" + " " + "mySecondStr";

//Write an expression to evaluate to your name if isName is true, but to evaluate to the number of computers you have if isName is false
//let isName = "Dalene";
if (myName === "Dalene") {
  return true;
} else {
  return computers;
}

//Control Flow
//Write a code snippet to output the word “hello” to the console if a variable called name is equal to your name, otherwise output the name.

let name = "Dalene";
let Dalene = "hello";
console.log(Dalene);
console.log(name);

//Write a code snippet to output “one” to the console if the variable myVar is equal to the number one, “two” if it is equal to two, and so on up to ten. If the number is any other number, output the word “unknown”.
let myVar = (number) => {
  // for (let i = 1; i <= 10; i++) {
  if (i === number) {
    switch (myVar) {
      case (i = 1):
        console.log("one");
        break;
      case (i = 2):
        console.log("two");
        break;
      case (i = 3):
        console.log("three");
        break;
      case (i = 4):
        console.log("four");
        break;
      case (i = 5):
        console.log("five");
        break;
      case (i = 6):
        console.log("six");
        break;
      case (i = 7):
        console.log("seven");
        break;
      case (i = 8):
        console.log("eight");
        break;
      case (i = 9):
        console.log("nine");
        break;
      case (i = 10):
        console.log("ten");
        break;
      default:
        console.log("unknown");
        break;
    }
  }
  console.log(myVar);
};
//looked up info

//Write a snippet to output the number 1 to 10 to the console
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Arrays
//Write an expression to to get the first item of an array
let arr = [a, b, c];
let first = arr[0];

//Write an expression to add the second and the last item of an array
let second = arr[2];
let last = arr[arr.length - 1];

//Write a function to swap two items in an array (for this one item only, please do not look this up unless you have to, and then, please comment whether you did).
// let arr = [a, b, c];
function swap(arr, indexA, indexB) {
  let temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}
[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
//looked up info

//Functions
//Declare a function named midTerms that returns the string “are here”.
function midTerms() {
  return (midTerms = "are here");
}
//Now, call the function and output the result of the function.
midTerms();
//Now, write a single statement (one line) and, using no intermediate variables, call that function and output the string “midterms are here” to the console.
console.log(`"midterms ${midTerms}"`);
//looked up info but i still dont think its rite

//Write a function that returns the sum of the numbers in an array.
function input() {
  let numbers = [10, 20, 30, 40];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    return (sum += numbers[i]);
  }
}
//Call that function with example input.
input();
//looked up info but i still dont think its rite
