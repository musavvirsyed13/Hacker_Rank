//Beautiful days at the movies

i = 20; // Starting day number
j = 23; // Ending day number
k = 6; // divisor

function beautifulDays(i, j, k) {
  // Write your code here
  let count = 0;
  for (let a = i; a <= j; a++) {
    let reverseNumber = a.toString().split("").reverse().join("");
    let result = Math.abs((a - reverseNumber) / k);
    // Number.isInteger() determines whether the passed value is an integer.
    if (Number.isInteger(result)) {
      count++;
    }
  }
  return count;
}

console.log(beautifulDays(i, j, k));
