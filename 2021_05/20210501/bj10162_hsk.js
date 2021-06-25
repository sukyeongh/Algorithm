const fs = require('fs');
const stdin = process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `100`;

let T = parseInt(stdin);
let result = [];

if (T % 10 !== 0) {
  console.log('-1');
  return;
}

let A = parseInt(T / 300);
result.push(A);
T -= A * 300;

let B = parseInt(T / 60);
result.push(B);
T -= B * 60;

let C = T / 10;
result.push(C);

console.log(result.join(' '));
