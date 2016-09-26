// One of the things that faculty do at the end of term is to make a class record summary of students based on the weighted scores of exams and exercises.

// Exams and Exercises

// The grading areas are exams and exercises, with the following weight:

// Grading Area  Weight
// Exam         65%
// Exercises    35%

// Each standard term has 4 exams, and several exercises. Every exam has a fixed total possible score of 100. Exercises, on the other hand, have varying score values and count, but the total value of exercise values always add up to 100. For example, a given term may have 5 exercises with possible total scores of [30, 20, 10, 20, 20] while another term may have 3 exercises with possible total scores of [20, 30, 50].

// When determing a student's grade, we'll first get a student's average score from the 4 exams, then add up all the exercise scores to get a number (out of 100). Then we'll apply the weights to get a final score, and use the following table to get the letter equivalent:

// Percent Grade   Letter Equivalent
// 93 - 100  A
// 85 - 92   B
// 77 - 84   C
// 69 - 76   D
// 60 - 68   E
// 0 - 59    F

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89, 88],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exrcises
  // select all keys from the student obj with keys()
  // create an array of scores objects
  var scoreData = Object.keys(scores).map(function(student) {
     // console.log(scores[student].scores);
     return scores[student].scores;
  });

  // transform the above score objects to be an array of arrays for exam scores
  var examData = scoreData.map(function(score) {
    return score.exams;
  });

  return {
    studentGrades: scoreData.map(function(scoreObj) {
      return getStudentScore(scoreObj);
    }),
    exams: getExamSummary(examData)
  };
}

function getStudentScore(scoreObj) {
  var lookupLetter = function(percentageGrade) {
    if (percentageGrade >= 93) {
      return "A";
    } else if (percentageGrade >= 85 && percentageGrade < 93) {
      return "B";
    } else if (percentageGrade >= 77 && percentageGrade < 85) {
      return "C";
    } else if (percentageGrade >= 69 && percentageGrade < 77) {
      return "D";
    } else if (percentageGrade >= 60 && percentageGrade < 69) {
      return "E";
    } else {
      return "F";
    }
  };

  var examsAvg = computeExamsAverage(scoreObj.exams);
  var exercisesAvg = computExercisesScore(scoreObj.exercises);
  var percentageGrade = Math.round(examsAvg * 0.65 + exercisesAvg * 0.35);

  return percentageGrade + " (" + lookupLetter(percentageGrade) + ")";
}

function getExamSummary(examScoresPerStudent) {
  var scoresPerExam = transpose(examScoresPerStudent);

  return scoresPerExam.map(function(examScores) {
    return {
      average: getExamAverage(examScores),
      minimum: getExamMinimum(examScores),
      maximum: getExamMaximum(examScores)
    };
  });
}

function transpose(array) {
  return array[0].map(function(col, columnIdx) {
    return array.map(function(row) {
      return row[columnIdx];
    });
  });
}

function getExamAverage(scores) {
  return scores.reduce(function(total, score) {
    return total + score;
  }) / scores.length;
}

function getExamMinimum(scores) {
  return scores.reduce(function(min, score) {
    return min <= score ? min : score;
  });
}

function getExamMaximum(scores) {
  return scores.reduce(function(max, score) {
    return max >= score ? max : score;
  });
}

generateClassRecordSummary(studentScores);

// returns:

// {
//   studentGrades: [ '80 (C)', '70 (D)', '74 (D)', '86 (B)', '59 (F)' ],
//   exams: [{ average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 }]
// }