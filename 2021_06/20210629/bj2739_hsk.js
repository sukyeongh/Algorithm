const fs = require('fs');
let stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `2`).split('\n');

const N = parseInt(stdin);

for (let i = 1; i < 10; i++) {
  console.log(`${N} * ${i} = ${i * N}`);
}
