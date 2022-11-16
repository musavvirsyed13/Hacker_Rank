//Counting Valleys

steps = 8;
path = ["U", "D", "D", "D", "U", "D", "U", "U"];

function countingValleys(steps, path) {
  // Write your code here
  let count = 0;
  let high = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "D") {
      count = count - 1;
    }
    if (path[i] === "U") {
      count = count + 1;
      if (count === 0) {
        high = high + 1;
      }
    }
  }
  return high;
}

console.log(countingValleys(steps, path));
