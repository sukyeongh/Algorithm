const fs = require('fs');
let stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `734 893`).split(' ');

let wordA = stdin[0].split('').reverse();
let wordB = stdin[1].split('').reverse();

let numA = parseInt(wordA.join(''));
let numB = parseInt(wordB.join(''));

if (numA > numB) console.log(numA);
else console.log(numB);
