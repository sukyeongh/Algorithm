const fs = require('fs');
let n = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `4`).split('\n');

console.log(n * n * n);
