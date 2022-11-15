//Min-max Sum -Find the max and min values obtained by summing four of five integers

// Method 1
arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  // Assign first element of array to min and max
  let min = arr[0];
  let max = arr[0];
  // calculate the total sum of the array
  let sum = arr.reduce((a, b) => {
    return a + b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(sum - max + " " + (sum - min));
}

miniMaxSum(arr);

// // Method 2

function miniMaxSum(arr) {
  //Add all array elements using reduce.
  let sum = arr.reduce((a, b) => {
    return a + b;
  });
  //Subtract from the sum the minimum value in the array. This get the maximum sum.
  const min = sum - Math.max(...arr);
  //Subtract from the sum the maximum value in the array. This get the minimum sum.
  const max = sum - Math.min(...arr);
  console.log(min + " " + max);
}
miniMaxSum(arr);
