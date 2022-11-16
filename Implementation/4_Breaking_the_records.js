//Breaking the records

scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  // Write your code here
  let highCount = 0;
  let lowCount = 0;
  let highScores = scores[0];
  let lowScores = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highScores) {
      highScores = scores[i];
      highCount++;
    } else if (scores[i] < lowScores) {
      lowScores = scores[i];
      lowCount++;
    }
  }
  console.log([highCount, lowCount]);
}

breakingRecords(scores);
