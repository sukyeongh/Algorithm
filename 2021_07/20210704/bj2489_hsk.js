const fs = require('fs');
let stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `5`).split('\n');

let N = parseInt(stdin);
for (let i = 1; i <= N; i++) {
  console.log(' '.repeat(N-i) + '*'.repeat(i));
}
