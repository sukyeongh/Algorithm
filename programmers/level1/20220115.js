function solution(a, b) {
  let small = Math.min(a, b);
  let big = Math.max(a, b);

  let sum = 0;
  for (let i = small; i <= big; i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(3, 5));
