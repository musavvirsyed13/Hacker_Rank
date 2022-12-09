//23 Jumping on the clouds

c = [0, 0, 1, 0, 0, 1, 0];
c = [0, 1, 0, 0, 0, 1, 0];

function jumpingOnClouds(c) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < c.length; ) {
    if (c.length > i + 2 && c[i + 2] === 0) {
      i = i + 2;
    } else {
      i = i + 1;
    }
    count++;
  }
  return count - 1;
}

console.log(jumpingOnClouds(c));
