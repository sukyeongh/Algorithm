function solution(n, lost, reserve) {
  let result = new Array(n).fill(1);
  for (let i = 0; i < lost.length; i++) {
    result[lost[i] - 1] -= 1;
  }
  for (let i = 0; i < reserve.length; i++) {
    result[reserve[i] - 1] += 1;
  }
  for (let i = 0; i < n - 1; i++) {
    if ((result[i] === 0 && result[i + 1] === 2) || (result[i] === 2 && result[i + 1] === 0)) {
      result[i] = 1;
      result[i + 1] = 1;
    }
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (result[i] >= 1) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
