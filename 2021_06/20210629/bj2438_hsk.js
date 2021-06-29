const fs = require('fs');
let stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `5`).split('\n');

let N = parseInt(stdin);
for (let i = 0; i < N; i++) {
  console.log('*'.repeat(i + 1));
}
