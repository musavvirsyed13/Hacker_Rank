// Love-Letter Mystery

s = "abc";

function theLoveLetterMystery(s) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length / 2; i++) {
    count = count + Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - i - 1));
  }
  return count;
}

console.log(theLoveLetterMystery(s));
