//Find digits

n = 12;

function findDigits(n) {
  // Write your code here
  let numToArr = String(n)
    .split("")
    .map((n) => {
      return Number(n);
    });
  let count = 0;
  for (let i = 0; i < numToArr.length; i++) {
    if (numToArr[i] != 0 && n % numToArr[i] === 0) {
      count++;
    }
  }
  return count;
}

console.log(findDigits(n));
