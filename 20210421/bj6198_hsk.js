const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim().split('\n')
  : `6
10
3
7
4
12
2`
).split('\n');

let N = parseInt(stdin[0]);
let buildings = stdin.filter((val, idx) => idx !== 0);
let stack = [];
let count = 0;

for (let i = 0; i < N; i++) {
  while (stack.length !== 0) {
    if (stack[stack.length - 1] <= buildings[i]) {
      stack.pop();
    } else break;
  }
  stack.push(buildings[i]);
  count += stack.length - 1;
}
console.log(count);
