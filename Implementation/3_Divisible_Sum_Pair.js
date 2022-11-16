//Divisible Sum Pair

ar = [1, 3, 2, 6, 1, 2];
k = 3;
n = 6;

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        if (i < j) result++;
      }
    }
  }
  return result;
}
console.log(divisibleSumPairs(n, k, ar));
