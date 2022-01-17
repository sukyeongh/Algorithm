function solution(arr) {
  return arr.filter((val, idx) => val !== arr[idx + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
