//Compare Triplets

var a = [5, 6, 7];
var b = [3, 6, 10];

function compareTriplets(a, b) {
  let aTotal = 0;
  let bTotal = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aTotal++;
    } else if (a[i] < b[i]) {
      bTotal++;
    } else {
      continue;
    }
  }
  return [aTotal, bTotal];
}
console.log(compareTriplets(a, b)); // Output : [1, 1]
