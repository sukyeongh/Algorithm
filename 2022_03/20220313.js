const fs = require('fs');
let stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `2 5 3 20`).split('\n');

console.log(stdin + '??!');
