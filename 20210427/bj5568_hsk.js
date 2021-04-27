const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `4
2
1
2
12
1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const K = parseInt(input());
let cards = [];
let hs = new Set([]);
for (let i = 0; i < N; i++) {
  cards.push({ str: input(), visited: false });
}
const dfs = (sum_str, count) => {
  if (count === 0) {
    hs.add(sum_str);
    return;
  }
  cards.map((value) => {
    if (!value.visited) {
      value.visited = true;
      dfs(sum_str + value.str, count - 1);
      value.visited = false;
    }
  });
};

dfs('', K);
console.log(hs.size);
