//Jumping on Clouds - Revisited -- Work on K3

c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
k = 3;

c = [0, 0, 1, 0, 0, 1, 1, 0];
k = 2;

function jumpingOnClouds(c, k) {
  //Write your code here
  let energy = 100;
  for (let i = 0; i < c.length; i += k) {
    if (c[i] === 0) {
      energy = energy - 1;
    } else if (c[i] === 1) {
      energy = energy - 3;
    }
  }
  return energy;
}

console.log(jumpingOnClouds(c, k));
