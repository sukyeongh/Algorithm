//타겟넘버 : https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
function solution(numbers, target) {
  let answer = 0;
  let initValue = 0;

  let getAnswer = (value, idx) => {
    if (idx === numbers.length) {
      if (value === target) answer++;
      return;
    }
    getAnswer(value + numbers[idx], idx + 1);
    getAnswer(value - numbers[idx], idx + 1);
  };

  getAnswer(initValue + numbers[0], 1);
  getAnswer(initValue - numbers[0], 1);

  return answer;
}

let numbers = [1, 1, 1, 1, 1];
console.log(solution(numbers, 3));
