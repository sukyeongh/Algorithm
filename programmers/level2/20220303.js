function solution(numbers) {
  let answer = numbers
    .map((c) => c + '')
    .sort((a, b) => b + a - (a + b))
    .join('');

  return answer[0] === '0' ? '0' : answer;
}

console.log(solution([0, 0]));