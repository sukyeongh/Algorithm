const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `4`).split('\n');

const N = parseInt(stdin);
const starLen = parseInt(Math.pow(2, N));
const starArr = Array.from(Array(starLen), () => Array(starLen).fill(''));

const drawStar = (x, y, len) => {
  if (len === 1) {
    starArr[x][y] = '*';
    return;
  }

  let currLen = len / 2;
  drawStar(x, y, currLen);
  drawStar(x, y + currLen, currLen);
  drawStar(x + currLen, y, currLen);
};

drawStar(0, 0, starLen);

for (var i = 0; i < starLen; i++) {
  let result = '';
  for (var j = 0; j < starLen - i; j++) {
    if (starArr[i][j] == '*') result += '*';
    else result += ' ';
  }
  console.log(result);
}
