function solution(arr, divisor) {
  const answer = arr.filter((element) => element % divisor === 0).sort((a, b) => a - b);

  return answer.length < 1 ? [-1] : answer;
}
