//with and without reduce :)
function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

//   let sum = ar.reduce(function (a, b) {
//     return a + b;
//   }, 0);
//   return sum;
//}
console.log(simpleArraySum([5, 20, 10, 15]));
