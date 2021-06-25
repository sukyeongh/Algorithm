const fs = require('fs');
let stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `1 1
2 3
3 4
9 8
5 2
0 0`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

for (let i = 0; i < stdin.length - 1; i++) {
  const [A, B] = input()
    .split(' ')
    .map((item) => parseInt(item));
  console.log(A + B);
}
