const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `COW 8`).split(' ');

let word = stdin[0];
let N_idx = Number(stdin[1] - 1);

let word_len = word.length;
let change_word_len = word.length;

const orderWord = (len, nth_word_idx) => {
  if (len == word_len) return nth_word_idx;

  let before_len = len / 2;

  if (before_len > nth_word_idx) return orderWord(before_len, nth_word_idx);

  let is_before_idx = nth_word_idx - before_len - 1 < 0;
  return orderWord(before_len, is_before_idx ? nth_word_idx - 1 : nth_word_idx - before_len - 1);
};

while (change_word_len <= N_idx) {
  change_word_len *= 2;
}

console.log(word[orderWord(change_word_len, N_idx)]);
