const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `backjon`).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let word = input();
let is_palindrome = 0;

//// is_palindrome을 1로 초기화하고, 14줄의 조건을 성립했을때만 0으로 갱신하고 break하면 else문을 쓰지 않아도 됐을 것 같아요!
for (let i = 0; i < word.length / 2; i++) {
  if (word[i] !== word[word.length - 1 - i]) {
    is_palindrome = 0;
    break;
  } else {
    is_palindrome = 1;
  }
}

console.log(is_palindrome);
