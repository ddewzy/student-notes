// For the next 2 problems, do not use destructuring assignment.
//You have two variables, myVar1 and myVar2. Swap these values.
let a;
let b;
const temp = a;
a = b;
b = temp;

//You have two properties on an object, myObj. These properties are named myProp1, myProp2. Swap these values.
let myObj = {
  myProp1: 1,
  myProp2: 2,
};
const temP = myObj.myProp1;
myObj.myProp1 = myObj.myProp2;
myObj.myProp2 = temP;

//You have an array of objects with properties myProp1, myProp2. Swap the values of these properties for every other object. For example, the first object will have its properties swapped. The second object will not, the third will, and so on. Have the swap be performed in a separate function.

const objArray = [
  { myProp1: 1, myProp2: 11 },
  { myProp1: 2, myProp2: 22 },
  { myProp1: 3, myProp2: 33 },
  { myProp1: 4, myProp2: 44 },
];
const swap = (number) => {
  let temp = number.myProp1;
  number.myProp1 = number.myProp2;
  number.myProp2 = temp;
};
for (let i = 0; i <= objArray.length - 1; i++) {
  if (!(i % 2)) {
    // let temp = myObj[i].myProp1;
    // myObj[i].myProp1 = myObj[i].myProp2;
    // myObj[i].myProp2 = temp;
    swap(objArray[i]);
  }
}
console.table(objArray);

//Rewrite the map function. That is, write a function that will call a callback function on each item in an array passing the current array element, the index, and the array to the callback.
function map(arr, callback) {
  let transformed = [];
  for (let i = 0; i < arr.length; i++) {
    transformed[i] = callback(arr[i], i, arr);
  }
  return;
}

//Now, using that map function, swap the properties myProp1 and myProp2 on each object in an array where the property doSwap is true OR it is the last item in the array.
const objArray1 = [
  { myProp1: 1, myProp2: 11, doSwap: true },
  { myProp1: 2, myProp2: 22 },
  { myProp1: 3, myProp2: 33 },
  { myProp1: 4, myProp2: 44, doSwap: true },
];
function callback(obj, i, arr1) {
  if (obj.doSwap === true) {
    return swap(obj);
  }
  return obj;
}
console.log(map(objArray1, callback));

//Write a function that will take in a string and returns a nickname function that will apply that string as a nickname to someone’s name.
const myName = "Dalene";
let nicknameGenerator = () => {
  let nickname = "The Great";
  return myName + " " + nickname;
};
console.log(nicknameGenerator());
