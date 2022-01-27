function solution(arr) {
  let answer = arr.filter((val) => !(val === Math.min.apply(null, arr)));

  return answer.length < 1 ? [-1] : answer;
}

console.log(solution([4, 3, 2, 1]));
