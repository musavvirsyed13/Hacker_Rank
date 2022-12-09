//25 Sales by Match

n = 9;
// ar = [1, 2, 1, 2, 1, 3, 2];
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
  // Write your code here
  let pairs = 0;
  ar.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      pairs++;
      ar[i] = ar[i + 1] = 0;
    }
  }
  return pairs;
}

console.log(sockMerchant(n, ar));
