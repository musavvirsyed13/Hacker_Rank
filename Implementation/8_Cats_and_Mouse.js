//Cats and Mouse

x = 1; //Cat A
y = 3; //Cat B
z = 2; // Mouse

function catAndMouse(x, y, z) {
  // Write your code here
  let A = Math.abs(z - x); // 2 // 1
  let B = Math.abs(z - y); // 1 // -1 (as the result is -1 Hence used Math.abs)
  if (A > B) {
    console.log("CAT B");
  } else if (A < B) {
    console.log("CAT A");
  } else if (A === B) {
    console.log("Mouse C");
  }
}

catAndMouse(x, y, z);
