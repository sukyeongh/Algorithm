const fs = require('fs');
let [n1, k1, n2, k2] = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `2 5 3 20`)
  .split(' ')
  .map(Number);

console.log(n1 * k1 + n2 * k2);
