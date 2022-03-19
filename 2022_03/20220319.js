const fs = require('fs');
let stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `100 80 70 60
80 70 60 100`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const aReport = input().split(' ').map(Number);
const bReport = input().split(' ').map(Number);

let aTotal = aReport.reduce((acc, cur) => acc + cur);
let bTotal = bReport.reduce((acc, cur) => acc + cur);

console.log(aTotal >= bTotal ? aTotal : bTotal);
