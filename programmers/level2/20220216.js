function solution(numbers) {
  let nums = new Set(numbers);
  let totalNum = 0;
  for (let i = 0; i <= 9; i++) {
    if (!nums.has(i)) {
      totalNum += i;
    }
  }
  return totalNum;
}

// 깔끔 풀이
// 전체 - 부분
// return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
