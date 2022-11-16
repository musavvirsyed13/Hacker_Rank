//Sequence Equation --> Example

p = [4, 3, 5, 1, 2];

function permutationEquation(p) {
  // Write your code here
  let arr = [];
  for (let i = 1; i <= p.length; i++) {
    arr.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }
  return arr;
}

console.log(permutationEquation(p));
