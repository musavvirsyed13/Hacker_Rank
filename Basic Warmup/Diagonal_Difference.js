// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

var arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
function diagonalDifference(arr) {
  let n = arr.length;
  let diag1 = 0;
  let diag2 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        diag1 = diag1 + arr[i][j];
      }
      if (i + j === n - 1) {
        diag2 = diag2 + arr[i][j];
      }
    }
  }
  return Math.abs(diag1 - diag2);
}
console.log(diagonalDifference(arr));
