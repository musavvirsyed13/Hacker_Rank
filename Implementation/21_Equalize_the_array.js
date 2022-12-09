//Equalize the array

arr = [3, 3, 2, 1, 3];

function equalizeArray(arr) {
  // Write your code here
  let obj = {};
  let maxCount = 1;
  for (let i of arr) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }
  for (let i in obj) {
    if (obj[i] > maxCount) {
      maxCount = obj[i];
    }
  }
  return arr.length - maxCount;
}

console.log(equalizeArray(arr));
