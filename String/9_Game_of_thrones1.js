// 9 Game of Thrones - I

s = "aaabbbb";

function gameOfThrones(s) {
  // Write your code here
  let word = s.split("").sort();
  let counter = 1;
  let oddCounter = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      counter++;
    } else {
      if (counter % 2 === 1) {
        oddCounter++;
        if (oddCounter > 1) return "N0";
      }
      counter = 1;
    }
  }
  return "YES";
}

console.log(gameOfThrones(s));
