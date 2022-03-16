const fs = require('fs');
let [A, B] = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `3 4`)
  .split(' ')
  .map(Number);

console.log((A + B) * (A - B));
