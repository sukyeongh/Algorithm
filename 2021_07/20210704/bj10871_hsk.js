const fs = require('fs');
let stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `10 5
1 10 4 9 2 3 8 5 7 6`
).split('\n');

const [N, X] = stdin[0].split(' ').map((value) => parseInt(value));
const A = stdin[1].split(' ').map((value) => parseInt(value));
let smallNumThanA = [];

A.map((num) => {
  if (X > num) smallNumThanA.push(num);
});

console.log(smallNumThanA.join(' '));
