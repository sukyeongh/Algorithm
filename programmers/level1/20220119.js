function solution(absolutes, signs) {
  let newAbsolutes = absolutes.map((value, idx) => (signs[idx] ? value : -value));

  return newAbsolutes.reduce((prev, cur) => prev + cur);
}

console.log(solution([1, 2, 3], [false, false, true]));
