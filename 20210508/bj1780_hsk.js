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

const paper = (row, col, N) => {
  let first = paper_list[row][col];
  let flag = true;

  for (let i = row; i < row + N; i++) {
    for (let j = col; j < col + N; j++) {
      if (paper_list[i][j] !== first) {
        flag = false;
        break;
      }
    }
  }

  if (flag) {
    result[parseInt(first) + 1]++;
  } else {
    for (let i = row; i < row + N; i += N / 3) {
      for (let j = col; j < col + N; j += N / 3) {
        paper(i, j, N / 3);
      }
    }
  }
};

paper(0, 0, N);

for (let i = 0; i < 3; i++) {
  console.log(result[i]);
}
