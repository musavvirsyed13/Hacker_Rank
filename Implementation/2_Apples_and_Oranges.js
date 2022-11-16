//Apples and Oranges

// sams house start point
s = 7;
// sams house end point
t = 11;
//apple tree point a location
a = 5;
// orange tree point b location
b = 15;
// distance at which each apple falls from tree
apples = [-2, 2, 1];
// distance at which each orange falls from tree
oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      appleCount++;
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    if (b + oranges[j] <= t && b + oranges[j] >= s) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
