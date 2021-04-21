const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `2`).split('\n');

let N = parseInt(stdin);

const changeToBinary = (N) => {
  let result = '';

  if (N <= 1) return result.concat(N);

  return result.concat(changeToBinary(parseInt(N / 2)), N % 2);
};

console.log(changeToBinary(N));
