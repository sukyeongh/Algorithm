function solution(n) {
  let cntOfOne = n
    .toString(2)
    .split('')
    .filter((num) => num == 1).length;

  for (let i = n + 1; ; i++) {
    let cntOfOneInNextNum = i
      .toString(2)
      .split('')
      .filter((num) => num == 1).length;

    if (cntOfOne === cntOfOneInNextNum) {
      return i;
    }
  }
}

console.log(solution(15));
