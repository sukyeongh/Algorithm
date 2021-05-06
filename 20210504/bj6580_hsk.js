const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `#define quadtree_width 16
#define quadtree_height 16
static char quadtree_bits[] = {
0xf0,0xf0,
0xf0,0xf0,
0xf0,0xf0,
0xf0,0xf0,
0x0f,0x0f,
0x0f,0x0f,
0x0f,0x0f,
0x0f,0x0f,
0xf0,0xf0,
0xf0,0xf0,
0xf0,0xf0,
0xf0,0xf0,
0x0f,0x0f,
0x0f,0x0f,
0x0f,0x0f,
0x0f,0x0f,
};`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let result = [];
const N = parseInt(input().split(' ')[2]);
input();
input();
let bits = [];
let pixels = Array.from(Array(N), () => Array(N).fill(''));

const insertBits = (row, start, hex_num) => {
  for (let i = start + 7; i >= start; i--) {
    if (hex_num >= Math.pow(2, i - start)) {
      hex_num -= Math.pow(2, i - start);
      pixels[row][i] = 'B';
    } else pixels[row][i] = 'W';
  }
};

const quardTree = (row, col, N) => {
  //// is_same 함수를 따로 뒀다면 break 대신 return으로 처리할 수 있어서 깔끔했을 것 같아요!
  let is_same = true;

  for (let i = row; i < row + N; i++) {
    if (!is_same) break; //// 2중 for문 바로 탈출 가능합니다 https://graykick.tistory.com/4
    for (let j = col; j < col + N; j++) {
      if (pixels[i][j] !== pixels[row][col]) {
        is_same = false;
        break;
      }
    }
  }

  if (is_same) {
    result.push(pixels[row][col]);
    return;
  }
  
  //// 재귀 감을 찾으신 것 같네요 ㅎㅎ 꽤 어려웠을텐데 수고 많으셨습니다!
  result.push('Q');
  quardTree(row, col, N / 2);
  quardTree(row, col + N / 2, N / 2);
  quardTree(row + N / 2, col, N / 2);
  quardTree(row + N / 2, col + N / 2, N / 2);
};

for (let i = 0; i < N; i++) bits.push(input());

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N / 8; j++) {
    let hexStr = bits[i].split(',');
    insertBits(i, j * 8, parseInt(hexStr[j], 16));
  }
}
console.log(N);
quardTree(0, 0, N);
console.log(result.join(''));
