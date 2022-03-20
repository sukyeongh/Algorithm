const fs = require('fs');
let N = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `1`).split('\n');

console.log(N == 0 ? 'YONSEI' : 'Leading the Way to the Future');
