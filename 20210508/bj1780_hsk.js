const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `9
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
0 1 -1 0 1 -1 0 1 -1
0 -1 1 0 1 -1 0 1 -1
0 1 -1 1 0 -1 0 1 -1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
let paper_list = [];
let result = [0, 0, 0];

for (let i = 0; i < N; i++) {
  paper_list.push(input().split(' '));
}

//// 무난함다
const paper = (row, col, N) => {
  let first_num = paper_list[row][col];
  let is_same = true;

  for (let i = row; i < row + N; i++) {
    for (let j = col; j < col + N; j++) {
      if (paper_list[i][j] !== first_num) {
        is_same = false;
        break;
      }
    }
  }

  if (is_same) {
    result[parseInt(first_num) + 1]++;
  } else {
    const division_size = Math.floor(N / 3);
    for (let i = row; i < row + N; i += division_size) {
      for (let j = col; j < col + N; j += division_size) {
        paper(i, j, N / 3);
      }
    }
  }
};

paper(0, 0, N);
console.log(result.join('\n'));
