const fs = require('fs');
let stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `0 4 2 5 6`)
  .split(' ')
  .map((value) => parseInt(value));

const sumArr = stdin.reduce((sum, curr) => {
  return sum + Math.pow(curr, 2);
}, 0);

console.log(sumArr % 10);
