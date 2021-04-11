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

const sortArr = (array) => {
  array.sort((a, b) => {
    const caseA = a.toUpperCase();
    const caseB = b.toUpperCase();

    if (caseA > caseB) return 1;
    if (caseA < caseB) return -1;
    if (caseA === caseB) return 0;
  });
};
const first_dic = [];

while (true) {
  let N = input();
  if (parseInt(N) === 0) break;

  const origin_words = [];
  for (let i = 0; i < parseInt(N); i++) {
    origin_words.push(input());
  }

  sortArr(origin_words);
  first_dic.push(origin_words[0]);
}
console.log(first_dic.join('\n'));
