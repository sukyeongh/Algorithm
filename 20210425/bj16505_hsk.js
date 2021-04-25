const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `4`).split('\n');

const N = parseInt(stdin);
const starLen = parseInt(Math.pow(2, N));
const starArr = Array.from(Array(starLen), () => Array(starLen).fill(''));
let result = '';

const drawStar = (x, y, len) => {
  if (len === 1) {
    starArr.forEach((horizontal, index) => {
      if (index === x) {
        horizontal[y] = '*';
      }
    });
    return;
  }

  let currLen = len / 2;
  drawStar(x, y, currLen);
  drawStar(x, y + currLen, currLen);
  drawStar(x + currLen, y, currLen);
};

drawStar(0, 0, starLen);

starArr.forEach((horizontal, h_index) => {
  for (let i = 0; i < horizontal.length; i++) {
    if (i === horizontal.length - h_index) break;
    if (horizontal[i] === '*') result = result.concat('*');
    else result = result.concat(' ');
  }
  if (h_index !== starArr.length - 1) result = result.concat('\n');
});

console.log(result);
