function solution(brown, yellow) {
  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      let x = yellow / i;
      let y = i;
      if ((x + 2) * (y + 2) === brown + yellow) {
        return [x + 2, y + 2];
      }
    }
  }
}

console.log(solution(10, 2));
