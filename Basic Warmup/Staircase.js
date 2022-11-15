//Staircase detail

//    #
//   ##
//  ###
// ####

// n = 6;

function staircase(n) {
  var str = "";
  var length = n;
  // use double use as we want to go x and y axis // base and height are equal
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      //condition when to use spaces and hashes based on length
      if (j < length) {
        str = str + " ";
      } else {
        str = str + "#";
      }
    }
    // decrement the length based on the above condition
    length--;
    // to add new line
    str = str + "\n";
  }
  return str;
}

console.log(staircase(n));
