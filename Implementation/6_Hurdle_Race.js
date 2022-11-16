//The Hurdle Race

k = 4;
height = [1, 6, 3, 5, 2];

function hurdleRace(k, height) {
  // Write your code here
  let maxCount = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > k) {
      let diff = height[i] - k;
      if (diff > maxCount) {
        maxCount = diff;
      }
    }
  }
  if (maxCount === 0) {
    return 0;
  }
  console.log(maxCount);
}

hurdleRace(k, height);
