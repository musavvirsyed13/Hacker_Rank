//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

candles = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
  // Write your code here
  let max = 0;
  let result = 0;
  for (let i = 0; i < candles.length; i++) {
    if (max < candles[i]) {
      max = candles[i];
    }
  }
  for (let i = 0; i < candles.length; i++) {
    if (max === candles[i]) {
      result++;
    }
  }
  return result;
}
console.log(birthdayCakeCandles(candles));
