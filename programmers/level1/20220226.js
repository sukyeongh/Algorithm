function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let arr1ToBinary = arr1[i].toString(2).padStart(n, 0);
    let arr2ToBinary = arr2[i].toString(2).padStart(n, 0);

    let decode = '';
    for (let j = 0; j < n; j++) {
      decode += arr1ToBinary[j] | arr2ToBinary[j] ? '#' : ' ';
    }
    answer.push(decode);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
