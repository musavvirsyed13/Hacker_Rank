// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  return sum;
}
