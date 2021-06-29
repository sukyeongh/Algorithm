const fs = require('fs');
let [A, B] = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `1 2`)
  .split(' ')
  .map((value) => parseInt(value));

if (A > B) console.log('>');
else if (A < B) console.log('<');
else console.log('==');
