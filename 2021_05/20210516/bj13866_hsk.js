const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `4 7 10 20`).split(' ');

const level = stdin.map((value) => parseInt(value));
console.log(Math.abs(level[0] + level[3] - level[1] - level[2]));
