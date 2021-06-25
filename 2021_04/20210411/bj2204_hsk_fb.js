const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `3
Cat
fat
bAt
4
call
ball
All
Hall
0`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const first_dic = [];

while (true) {
  let N = input();
  if (parseInt(N) === 0) break;

  let minWord = input();
  let currWord = '';
  for (let i = 1; i < parseInt(N); i++) {
    currWord = input();
    if (minWord.toLowerCase() > currWord.toLowerCase()) minWord = currWord;
  }
  first_dic.push(minWord);
}

console.log(first_dic.join('\n'));
