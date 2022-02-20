function solution(d, budget) {
  d.sort((a, b) => a - b);

  let totalBudget = 0;
  for (let i = 0; totalBudget <= budget; i++) {
    if (totalBudget + d[i] <= budget) {
      totalBudget += d[i];
      continue;
    }
    return i;
  }
}

console.log(solution([1, 3, 2, 5, 4], 9));
