//모든 숫자 변수를 BitInt로 변경하면 가능함.
const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `COW 8`).split(' ');

let word = stdin[0];
let N_idx = BigInt(stdin[1]) - BigInt(1);

let word_len = BigInt(word.length);
let change_word_len = BigInt(word.length);

const orderWord = (len, nth_word_idx) => {
  if (len == word_len) return nth_word_idx;

  let before_len = BigInt(len) / BigInt(2);

  if (before_len > nth_word_idx) return orderWord(before_len, nth_word_idx);

  let is_before_idx = nth_word_idx - before_len - BigInt(1) < 0;
  return orderWord(before_len, is_before_idx ? nth_word_idx - BigInt(1) : nth_word_idx - before_len - BigInt(1));
};

//// chagne_word_len을 구하는 부분도 함수로 분리하면 더 좋을 것 같습니다!
while (change_word_len <= N_idx) {
  change_word_len *= 2n;
}

console.log(word[orderWord(change_word_len, N_idx)]);
