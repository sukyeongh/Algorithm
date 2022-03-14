const fs = require('fs');
let [total, diff] = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `10
2`
)
  .split('\n')
  .map(BigInt);

let claudia = (total + diff) / 2n;
let natalia = (total - diff) / 2n;
console.log(`${claudia}\n${natalia}`);
