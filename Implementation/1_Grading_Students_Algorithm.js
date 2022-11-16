//Grading Students Algorithm

grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  // Write your code here
  let result = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let remainder = grades[i] % 5;
      if (remainder === 3) {
        result.push(grades[i] + 2);
      } else if (remainder === 4) {
        result.push(grades[i] + 1);
      } else {
        result.push(grades[i]);
      }
    } else {
      result.push(grades[i]);
    }
  }
  return result;
}

console.log(gradingStudents(grades));
