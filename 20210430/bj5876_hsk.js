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

const getMaxBalanceLen = (row, col, openBracketCnt, closeBracketCnt) => {
  if (row < 0 || col < 0 || row >= N || col >= N) return 0;
  if (visited[row][col]) return 0;

  visited[row][col] = true;
  if (horseshoes[row][col] === '(') {
    if (closeBracketCnt > 0) {
      visited[row][col] = false;
      return 0;
    }
    openBracketCnt++;
  } else {
    closeBracketCnt++;
  }

  if (openBracketCnt === closeBracketCnt) {
    visited[row][col] = false;
    return openBracketCnt * 2;
  }

  let maxBalancedLen = getMaxBalanceLen(row + 1, col, openBracketCnt, closeBracketCnt);
  maxBalancedLen = Math.max(maxBalancedLen, getMaxBalanceLen(row - 1, col, openBracketCnt, closeBracketCnt));
  maxBalancedLen = Math.max(maxBalancedLen, getMaxBalanceLen(row, col + 1, openBracketCnt, closeBracketCnt));
  maxBalancedLen = Math.max(maxBalancedLen, getMaxBalanceLen(row, col - 1, openBracketCnt, closeBracketCnt));

  visited[row][col] = false;
  return maxBalancedLen;
};

console.log(getMaxBalanceLen(0, 0, 0, 0));
