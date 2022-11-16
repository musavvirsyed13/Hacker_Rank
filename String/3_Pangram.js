//Pangram

s = "We promptly judged antique ivory buckles for the next prize";

function pangrams(s) {
  // Write your code here
  const aplhas = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  s = s.toLowerCase();
  for (let i = 0; i < aplhas.length; i++) {
    if (!s.includes(aplhas[i])) {
      return "not pangram";
    }
  }
  return "pangram";
}

console.log(pangrams(s));
