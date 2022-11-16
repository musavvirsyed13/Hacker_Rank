//Number Line Jumps --> Example

x1 = 0;
v1 = 3;
x2 = 4;
v2 = 2;

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let result = "NO";
  if (v1 <= v2) return result;
  while (x1 <= x2) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) {
      result = "YES";
      break;
    }
  }
  return result;
}

console.log(kangaroo(x1, v1, x2, v2));
