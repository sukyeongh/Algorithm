function solution(answers) {
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let cntOfCorrectQuiz = [0, 0, 0];
  answers.map((value, idx) => {
    if (value === first[idx % 5]) cntOfCorrectQuiz[0] += 1;
    if (value === second[idx % 8]) cntOfCorrectQuiz[1] += 1;
    if (value === third[idx % 10]) cntOfCorrectQuiz[2] += 1;
  });

  let maxCnt = Math.max.apply(null, cntOfCorrectQuiz);
  let personOfMaxCorrectQuiz = [];

  cntOfCorrectQuiz.map((value, idx) => {
    if (maxCnt === value) {
      personOfMaxCorrectQuiz.push(idx + 1);
    }
  });

  return personOfMaxCorrectQuiz;
}

console.log(solution([1, 3, 2, 4, 2]));
