const fs = require('fs');
const stdin = process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `10`;

let N = parseInt(stdin);
let fibo = [0, 1];

for (let i = 2; i <= N; i++) {
  fibo.push(fibo[i - 2] + fibo[i - 1]);
}

console.log(fibo[N]);
