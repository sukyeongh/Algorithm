function solution(n) {
  const arr = new Array(n).fill(1);

  arr[0] = 0;
  for (let i = 2; i * i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
      arr[j - 1] = 0;
    }
  }

  return arr.filter((val) => val === 1).length;
}

console.log(solution(10));
