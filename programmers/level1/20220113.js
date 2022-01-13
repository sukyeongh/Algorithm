function solution(N, stages) {
  let stageClearPlayer = new Array(N + 1).fill(0);
  for (let i = 0; i < stages.length; i++) {
    for (let j = 0; j < stages[i]; j++) {
      stageClearPlayer[j] += 1;
    }
  }

  let failureRate = new Array(N).fill([0, 0]);
  for (let i = 0; i < stageClearPlayer.length - 1; i++) {
    failureRate[i] = [i + 1, (stageClearPlayer[i] - stageClearPlayer[i + 1]) / stageClearPlayer[i]];
  }

  failureRate.sort((a, b) => b[1] - a[1]);
  return failureRate.map((value) => value[0]);
}

console.log(solution(4, [4, 4, 4, 4, 4]));
