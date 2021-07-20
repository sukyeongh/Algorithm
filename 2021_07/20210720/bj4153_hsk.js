const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `6 8 10
25 52 60
5 12 13
0 0 0`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const isRightTriangle = (sideA, sideB, sideC) => {
  if (Math.pow(sideA, 2) + Math.pow(sideB, 2) === Math.pow(sideC, 2)) return true;
  return false;
};

while (1) {
  const [sideA, sideB, sideC] = input()
    .split(' ')
    .map(Number)
    .sort((a, b) => {
      return a - b;
    });

  if (sideA === 0) break;

  if (isRightTriangle(sideA, sideB, sideC)) console.log('right');
  else console.log('wrong');
}
