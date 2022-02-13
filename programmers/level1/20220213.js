function solution(n) {
  let i = n;
  let min = n;
  while (i > 0) {
    if (n % i === 1) {
      min = i;
    }
    i--;
  }

  return min;
}

console.log(solution(12));
