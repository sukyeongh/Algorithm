const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `9
the
quick
brown
fox
jumps
over
a
sleazy
dog`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
let words = [];
let alphabet_check = [];
let all_alphabet_check = (1 << ('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1)) - 1;
let result = 0;

const cntTestSentence = (idx, check) => {
  if (idx === N) {
    if (check === all_alphabet_check) result++;
    return;
  }
  cntTestSentence(idx + 1, check);
  cntTestSentence(idx + 1, check | alphabet_check[idx]);
};

for (let i = 0; i < words.length; i++) {
  let check = 0;
  for (let j = 0; j < words[i].length; j++) {
    check |= 1 << (words[i].charCodeAt(j) - 'a'.charCodeAt(0));
  }
  alphabet_check.push(check);
}

for (let i = 0; i < N; i++) {
  words.push(input());
}

cntTestSentence(0, 0);
console.log(result);
