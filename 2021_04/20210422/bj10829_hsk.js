const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `2`).split('\n');

let N = parseInt(stdin);

const changeToBinary = (N) => {
  let result = '';

  if (N <= 1) return result.concat(N);
  //// 낯선 개념인 머리재귀를 바로 이해하고 쓰시네요. 앞으로의 재귀풀이가 기대됩니다 ㅎㅋㅋ
  return result.concat(changeToBinary(parseInt(N / 2)), N % 2);
};

console.log(changeToBinary(N));
