const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim().split('\n')
  : `4
9 5 4 8`
).split('\n');

let N = parseInt(stdin[0]);
let list = stdin[1].split(' ').map((v) => parseInt(v));
let stack = [];
let result = new Array(N).fill(-1);

for (let i = 0; i < N; i++) {
  while (stack.length !== 0 && list[stack[stack.length - 1]] < list[i]) {
    result[stack.pop()] = list[i];
  }
  stack.push(i);
}
console.log(result.join(' '));
