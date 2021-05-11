const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `2541`).split(' ');

const N = parseInt(stdin);

console.log(N - 543);
