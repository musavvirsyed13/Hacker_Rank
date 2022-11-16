//Funny String

s = "bcxz";
// create a copy of the string in reverse
//Iterate thru each string
// compare the absolute difference in ascii values
// of the characters in position 0, 1 and 1, 2 and 2, 3 and so on..
// if absolute difference is same for both the strings then it is funny
// if funny return funny else return not funny

function funnyString(s) {
  // Write your code here
  let arr = [];
  for (let i = 0; i < s.length - 1; i++) {
    arr.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)));
  }
  if (JSON.stringify(arr) == JSON.stringify(arr.reverse())) {
    return "Funny";
  } else {
    return "Not Funny";
  }
}

console.log(funnyString(s));
