function solution(x) {
  let dividedNum = x
    .toString()
    .split('')
    .map(Number)
    .reduce((prev, cur) => prev + cur);

  return x % dividedNum === 0 ? true : false;
}

console.log(solution(13));
