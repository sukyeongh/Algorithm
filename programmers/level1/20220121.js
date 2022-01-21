function solution(a, b) {
  return a.reduce((prev, cur, idx) => (prev += cur * b[idx]), 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
