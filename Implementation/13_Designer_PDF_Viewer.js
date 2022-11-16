//Designer PDF Viewer --> Example

h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5,
];

word = "torn";

function designerPdfViewer(h, word) {
  // Write your code here
  let alpha = [
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
  let result = [];

  for (let i = 0; i < word.length; i++) {
    result.push(h[alpha.indexOf(word[i])]);
  }
  let tallest = result.sort()[result.length - 1];
  return tallest * word.length;
}

console.log(designerPdfViewer(h, word));
