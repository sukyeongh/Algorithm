function solution(arr) {
  let sum = arr.reduce((prev, cur) => {
    return prev + cur;
  });

  return sum / arr.length;
}

console.log(solution([1, 2, 3, 4]));
