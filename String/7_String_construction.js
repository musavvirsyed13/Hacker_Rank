// 7 String Construction

// s = "abcd";
s = "abab";

function stringConstruction(s) {
  // Write your code here
  return new Set(s).size;
}

console.log(stringConstruction(s));
