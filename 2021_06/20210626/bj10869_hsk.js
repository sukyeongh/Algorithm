const fs = require('fs');
let [A, B] = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `7 3`)
  .split(' ')
  .map((value) => parseInt(value));

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);
