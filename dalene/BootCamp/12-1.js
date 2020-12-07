//implement mod function by repeatedly subtracting (and a for or while loop). Don't use % or / operartors
// Left side of % operator is called the 'dividend' and right side of % operator is called the 'divisor'
// AFTER solving for positive numbers, consider negative numbers. You result should be the same magnitude/size
// regardless, but if the dividend is negative, then the result should be negative.
function mod(x, y) {
  //   let result = x;
  //   while (result >= y) result -= y;
  //   return result;
  for (let result = x; result >= y; result--) {
    result -= y;
    return result;
  }
}
console.log(mod(9, 5));

function subtract(a, b) {
  let divisor = Math.abs(b);
  let dividend = Math.abs(a);

  while (dividend > divisor) {
    dividend -= divisor;
  }
  // Math.sign(a) * dividend;
  if (a < 0) {
    return -1 * dividend;
  }
  return dividend;
}
console.log(subtract(-20, 6)); // -20, 6 = -2
console.log(subtract(20, 6)); // 20, 6 = 2 ***
console.log(subtract(-20, -6)); // -20, -6 = -2
console.log(subtract(20, -6)); // 20, -6 = 2 ***
