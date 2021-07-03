const fs = require('fs');
let stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `5`).split('\n');

let N = parseInt(stdin);
let numArr = []
for (let i = 1; i <= N; i++) {
  numArr.push(i)
}
console.log(numArr.join('\n'))
