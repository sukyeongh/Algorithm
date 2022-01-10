function solution(x) {
  let remainder = x
    .toString()
    .split('')
    .map(Number)
    .reduce((prev, cur) => prev + cur);

  return x % remainder === 0 ? true : false;
}

console.log(solution(13));
