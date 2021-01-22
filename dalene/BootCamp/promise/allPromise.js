function thingFunc1(everythingGroovy) {
  everythingGroovy("Thing 1 success");
}
// const { reject } = require("async");
let thing1 = new Promise(thingFunc1);
function thingFunc2(resolve) {
  setTimeout(resolve, 5000, "Thing 2 after 5 sec");
}
let thing2 = new Promise(thingFunc2);
let thing3 = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, new Error("Thing 3 failed"));
});
let things = [thing1, thing2, thing3];
// as soon as ANY promise is resolved/fulfilled, we want to resolve the promise returned from anyPromise
// once ALL promises are rejected, we want to reject the promise returned from any Promise (with an AggregateError)
function allPromise(all) {
  let resolvedPromise = 0;
  let arr = [];
  const aggregatePromise = new Promise((resolve, reject) => {
    for (let i = 0; i < all.length; i++) {
      all[i].then(
        (result) => {
          resolvedPromise++;
          arr[i] = result;
          if (resolvedPromise === all.length) {
            resolve(arr);
          }
        },
        () => {
          reject(new Error("Rejected"));
        }
      );
    }
  });
  return aggregatePromise;
}
let theEnd = allPromise(things)
  .then((result) => console.log(result))
  .catch(console.error);
