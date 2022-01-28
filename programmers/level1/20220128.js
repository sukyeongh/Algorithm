function solution(n) {
  return n
    .toString()
    .split('')
    .map(Number)
    .reduce((prev, cur) => prev + cur);
}
