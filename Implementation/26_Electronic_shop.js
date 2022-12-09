// 26 Electronics Shop

// keyboards = [40, 50, 60];
// drives = [5, 8, 12];
// b = 60;

keyboards = [4];
drives = [5];
b = 5;

function getMoneySpent(keyboards, drives, b) {
  //*Write your code here.
  let cost = [];
  for (let k of keyboards) {
    for (let d of drives) {
      if (k + d <= b) {
        cost.push(k + d); //  [45, 48, 52, 55, 58]
      } else if (Math.min(...keyboards) + Math.min(...drives) > b) {
        return -1;
      }
    }
  }
  return Math.max(...cost);
}

console.log(getMoneySpent(keyboards, drives, b));
