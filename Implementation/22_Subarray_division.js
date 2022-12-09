//22. Subarray Division

s = [2, 2, 1, 3, 2];
d = 4;
m = 2;

function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum = s[i];
    for (let j = 1; j < m; j++) {
      console.log((sum = sum + s[i + j]));
    }
    if (sum === d) {
      count++;
      sum = 0;
    }
  }
  return count;
}

console.log(birthday(s, d, m));
