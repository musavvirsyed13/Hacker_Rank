//Migratory Birds ==> Example

arr = [1, 1, 2, 2, 3];
arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr) {
  // Write your code here
  let largest = 1;
  let counter = largest;
  let type = 0;

  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    largest = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
    if (largest > counter) {
      counter = largest;
      type = arr[i];
    }
  }
  return type;
}

console.log(migratoryBirds(arr));

//Method 2
function migratoryBirds(arr) {
  let sorted = arr.sort();
  let ans = sorted[0];
  let maxOccur = 1,
    counter = 0;

  for (let i = 0; i < sorted.length; i++) {
    counter = sorted[i] === sorted[i - 1] ? counter + 1 : 0;
    if (counter > maxOccur) {
      ans = sorted[i];
      maxOccur = counter;
    }
  }

  return ans;
}
