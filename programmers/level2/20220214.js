function getFibonacciNum(n) {
  let fibonacciNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibonacciNums[i] = (fibonacciNums[i - 1] + fibonacciNums[i - 2]) % 1234567;
  }
  return fibonacciNums[n];
}

function solution(n) {
  return getFibonacciNum(n) % 1234567;
}
