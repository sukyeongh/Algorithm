const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `backjon`).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let word = input();
let is_palindrome = 1;

for (let i = 0; i < word.length / 2; i++) {
  if (word[i] !== word[word.length - 1 - i]) {
    is_palindrome = 0;
    break;
  }
}

console.log(is_palindrome);
