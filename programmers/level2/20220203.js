function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((prev, next, idx) => {
    return (prev += next * B[idx]);
  }, 0);
}

console.log(solution([1, 4, 2], [5, 4, 4]));
