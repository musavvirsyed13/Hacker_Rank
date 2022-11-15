// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// positive - 3 --> 3/6 (ratio)
// negative - 2 --> 2/6 (ratio)
// Zero - 1 --> 1/6 (ratio)
// n = 6;

arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero++;
    } else if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    }
  }
  //   return `${positive},${negative},${zero}`;
  console.log(positive / arr.length.toPrecision(6));
  console.log(negative / arr.length.toPrecision(6));
  console.log(zero / arr.length.toPrecision(6));
}

console.log(plusMinus(arr));
