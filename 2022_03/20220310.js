const fs = require('fs');
let [small, medium] = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `12
15`
)
  .split('\n')
  .map(Number);

console.log(medium + medium - small);
