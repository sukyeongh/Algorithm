const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `4
(())
()((
(()(
))))`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const board = Array.from(Array(N), () => Array(N).fill(''));
const visited = Array.from(Array(N), () => Array(N).fill(false));
const horseshoes = board.map((value) => {
  return (value = input().split(''));
});
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let result = 0;

const getMaxLen = (x, y, openCnt, closeCnt, open) => {
  if (openCnt < closeCnt) return 0;
  if (openCnt === closeCnt) result = Math.max(result, openCnt + closeCnt);

  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    let row = x + dx[i];
    let col = y + dy[i];

    if (row < 0 || row >= N || col < 0 || col >= N) continue;
    if (visited[row][col]) continue;

    if (horseshoes[row][col] === '(') {
      if (!open) continue;
      getMaxLen(row, col, openCnt + 1, closeCnt, true);
    } else {
      getMaxLen(row, col, openCnt, closeCnt + 1, false);
    }
  }

  visited[x][y] = false;
};

if (horseshoes[0][0] === ')') {
  console.log(0);
} else {
  getMaxLen(0, 0, 1, 0, true);
  console.log(result);
}
