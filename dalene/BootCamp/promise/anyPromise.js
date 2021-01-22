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
let things = [thing3];
// as soon as ANY promise is resolved/fulfilled, we want to resolve the promise returned from anyPromise
// once ALL promises are rejected, we want to reject the promise returned from any Promise (with an AggregateError)
function anyPromise(all) {
  let rejectedCount = 0;
  const aggregatePromise = new Promise((resolve, reject) => {
    for (let i = 0; i < all.length; i++) {
      all[i].then(resolve, () => {
        rejectedCount++;
        if (rejectedCount === all.length) {
          reject(new Error("All rejected"));
        }
      });
    }
  });
  return aggregatePromise;
}
let theEnd = anyPromise(things)
  .then(() => console.log("a promise finished"))
  .catch(console.error);
