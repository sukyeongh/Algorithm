const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `9223372036854775807 9223372036854775808`
).split(' ');

let A = BigInt(stdin[0]);
let B = BigInt(stdin[1]);

let result = A + B;
console.log(result.toString());
