function birthdayCakeCandles(candles) {
  let tallest = 0;
  let howManyTallest = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > tallest) {
      tallest = candles[i];
      howManyTallest = 0;
    }
    if (candles[i] === tallest) {
      howManyTallest++;
    }
  }
  return howManyTallest;
}

// function birthdayCakeCandles(candles) {
//   candles.sort((a, b) => a - b);
//   const max = candles[candles.length - 1];
//   return candles.filter((candleHeight) => candleHeight === max).length;
// }

console.log(birthdayCakeCandles([3, 2, 1, 3]));
console.log(birthdayCakeCandles([4, 1, 3, 4]));
