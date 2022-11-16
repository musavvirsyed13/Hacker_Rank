//Viral Advertising

n = 3; // Number of days

function viralAdvertising(n) {
  // Write your code here
  let shared = 5;
  let likedAd = 0;
  let cumulativeLike = 0;

  for (let i = 1; i <= n; i++) {
    likedAd = Math.floor(shared / 2);
    shared = likedAd * 3;
    cumulativeLike = cumulativeLike + likedAd;
  }
  return cumulativeLike;
}

console.log(viralAdvertising(n));
