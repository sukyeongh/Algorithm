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

const getMaxLen = (row, col, openCnt, closeCnt) => {
  if (row < 0 || col < 0 || row >= N || col >= N) return 0;
  if (visited[row][col]) return 0;

  visited[row][col] = true;
  if (horseshoes[row][col] === '(') {
    if (closeCnt > 0) {
      visited[row][col] = false;
      return 0;
    }
    openCnt++;
  } else {
    closeCnt++;
  }

  if (openCnt === closeCnt) {
    visited[row][col] = false;
    return openCnt * 2;
  }

  let maxLen = getMaxLen(row + 1, col, openCnt, closeCnt);
  maxLen = Math.max(maxLen, getMaxLen(row - 1, col, openCnt, closeCnt));
  maxLen = Math.max(maxLen, getMaxLen(row, col + 1, openCnt, closeCnt));
  maxLen = Math.max(maxLen, getMaxLen(row, col - 1, openCnt, closeCnt));

  visited[row][col] = false;
  return maxLen;
};

if (horseshoes[0][0] === ')') {
  console.log(0);
} else {
  console.log(getMaxLen(0, 0, 0, 0));
}
