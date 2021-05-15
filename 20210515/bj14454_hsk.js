const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `COW 8`).split(' ');

let word = stdin[0];
let N_idx = Number(stdin[1] - 1);

let word_len = Number(word.length);
let change_word_len = Number(word.length);

const orderWord = (len, nth_word) => {
  if (len === word_len) return nth_word;

  let before_len = len / 2;

  if (nth_word < before_len) return orderWord(before_len, nth_word);

  let is_before = nth_word - before_len - 1 < 0;
  return orderWord(before_len, is_before ? nth_word - 1 : nth_word - before_len - 1);
};

while (change_word_len <= N_idx) {
  change_word_len *= 2;
}

console.log(word[orderWord(change_word_len, N_idx)]);
