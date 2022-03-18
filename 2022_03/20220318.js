const fs = require('fs');
let N = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `3`).split('\n');

console.log(1);
