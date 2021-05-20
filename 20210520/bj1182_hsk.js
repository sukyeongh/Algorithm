const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `5 0
-7 -3 -2 5 8`
).split('\n');

const input = stdin[0].split(' ');
const arr = stdin[1].split(' ').map((value) => parseInt(value));

const N = parseInt(input[0]);
const S = parseInt(input[1]);
let result = 0;

//// 굳~
let subset_num = 1 << N;
for (let i = 1; i < subset_num; i++) {
  let sum = 0;
  for (let j = 0; j < N; j++) {
    if ((i & (1 << j)) !== 0) sum += arr[j];
  }
  if (sum === S) result++;
}

console.log(result);
