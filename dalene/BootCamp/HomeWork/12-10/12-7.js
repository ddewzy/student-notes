//writing one line of code, write a function to multiply every element in an array by two
//Now, Using makeSizer() function at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures for inspiration, create a higher order function
//that will allow you change the background color of the document body via like so:
// setBlue(); //background color is set to blue
// setRed(); //background color is set to red
//a higher order func is any func which takes a func as an arg and returns a func or callback
//Finally, Unsing the Module Design Pattern at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures for inspiration/pattern, use the function above
// to create a logger object with two functions as properties:
// 1) log  (this will log to the console and set the background to blue via setBlue())
// 2) error (this will log to the console via console.error and set the background to red via setRed());
//setBlue and setRed should be "private" methods contained in the closure, very much like "changeBy()" is in the example.
const timesTwo = (array) => array.map((x) => x * 2);
//timesTwo([1, 4, 9, 16]);

function makeColor(color) {
  return function () {
    document.body.style.background.color = color;
  };
}

let logger = function () {
  let setBlue = makeColor("blue");
  let setRed = makeColor("red");
  let isError = false;
  return {
    log: function (myLog) {
      console.log(`${myLog}`);
      setBlue();
      isError = false;
    },
    error: function (myError) {
      console.error(`${myError}`);
      setRed();
      isError = true;
    },
    isError: function () {
      return isError;
    },
  };
};

// The logger object should also have an isError property that will return whether the last log was an error. That is:
// Example:
// logger = (function() { //code })();
// logger.log('testing');
// console.log(logger.isError);
// will output:
// testing
// false

// Whereas:
// logger = (function() { //code })();
// logger.error('an error string');
// console.log(logger.isError);
// will output:
// an error string
// true
