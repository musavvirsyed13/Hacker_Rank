//8 Beautiful Binary String

b = "0100101010";
n = 10;

function beautifulBinaryString(b) {
  // Write your code here

  //Method 1
  let result = b.split("010").join("");
  return (b.length - result.length) / 3;

  // Method 2
  const matches = b.match(/010/g);
  return matches ? matches.length : 0;
}

console.log(beautifulBinaryString(b));
