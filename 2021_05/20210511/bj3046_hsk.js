const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `11 15`).split(' ');

let R1 = parseInt(stdin[0]);
let S = parseInt(stdin[1]);

let R2 = S * 2 - R1;

console.log(R2);
