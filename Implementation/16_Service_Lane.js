//Service Lane --> Example

n = [2, 3, 1, 2, 3, 2, 3, 3];
cases = [
  [0, 3],
  [4, 6],
  [6, 7],
  [3, 5],
  [0, 7],
];
// n = width.length;
// t = cases.length;

function serviceLane(n, cases) {
  // Write your code here
  let result = [];
  for (let i = 0; i < cases.length; i++) {
    //Save cases[i] in a variable
    let unit = cases[i];
    // Use array. slice --> array.slice(start, end)
    let widthSlice = n.slice(unit[0], unit[1] + 1);
    // push the new array to result variable
    result.push(widthSlice);
  }
  // create new variable to save the maxwidthvehicle array
  let maxWidthVehicle = [];
  // Loop in with the result of array
  for (let j = 0; j < result.length; j++) {
    maxWidthVehicle.push(Math.min(...result[j]));
  }
  return maxWidthVehicle;
}

console.log(serviceLane(n, cases));
