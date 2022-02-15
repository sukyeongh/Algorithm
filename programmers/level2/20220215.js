function solution(n) {
  let answer = '';
  const remainders = [4, 1, 2];

  while (n) {
    answer = remainders[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}
