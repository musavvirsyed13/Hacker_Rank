//Alternating Characters

s = "AAABBB";

function alternatingCharacters(s) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    //Use charAt to returns the character at a specified index in a string
    if (s.charAt(i) === s.charAt(i - 1)) {
      count++;
    }
  }
  return count;
}

console.log(alternatingCharacters(s));
