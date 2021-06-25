const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `3 4 6`).split(' ');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = parseInt(input());
let M = parseInt(input());
let K = parseInt(input());

console.log(parseInt(K / M), K % M);
