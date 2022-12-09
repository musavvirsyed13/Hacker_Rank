//Cut the sticks

arr = [5, 4, 4, 2, 2, 8];

function cutTheSticks(arr) {
  // Write your code here
  let newArr = [];
  while (arr.length != 0) {
    let minVal = Math.min(...arr);
    newArr.push(arr.length);
    for (let i = 0; i < arr.length; i++) {
      let sub = arr[i] - minVal;
      if (sub === 0) {
        arr.splice(i, 1);
        i = i - 1;
      } else {
        arr[i] = sub;
      }
    }
  }
  return newArr;
}

console.log(cutTheSticks(arr));
