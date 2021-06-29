const fs = require('fs');
let stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `1999`).split('\n');

let year = parseInt(stdin);
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) console.log(1);
else console.log(0);
