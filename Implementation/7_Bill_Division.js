//Bill Division

bill = [3, 10, 2, 9];
k = 10;
b = 12;

function bonAppetit(bill, k, b) {
  // Write your code here
  let totalSum = 0;
  for (let i = 0; i < bill.length; i++) {
    totalSum = totalSum + bill[i];
  }
  let costOfConsumedItems = totalSum - k;
  let isOverCharged = b - costOfConsumedItems / 2;
  if (isOverCharged) {
    return isOverCharged;
  } else {
    return "Bon Appetit";
  }
}

console.log(bonAppetit(bill, k, b));
