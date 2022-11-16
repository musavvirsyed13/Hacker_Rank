// Angry Professor

k = 3;
a = [-1, -3, 4, 2];

function angryProfessor(k, a) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      count++;
    }
  }
  if (count >= k) {
    return "No";
  } else {
    return "Yes";
  }
}

console.log(angryProfessor(k, a));
