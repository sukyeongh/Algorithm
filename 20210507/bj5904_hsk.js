const fs = require('fs');
const stdin = process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `11`;

const N = parseInt(stdin);

let len = 3;
let index = 0;

if (len >= 3) {
  while (len * 2 + 3 + index < N) {
    index += 1;
    len = len * 2 + 3 + index;
  }
  index += 1;
  len = len * 2 + 3 + index;
}

const Moo = (curr_num, index, len) => {
  if (index === 0) {
    return curr_num - 1 === 0 ? 'm' : 'o';
  }

  let before = parseInt((len - (3 + index)) / 2);

  if (curr_num <= before) Moo(curr_num, index - 1, before);
  else if (before < curr_num && curr_num <= before + (3 + index)) {
    if (curr_num === before + 1) return 'm';
    else return 'o';
  } else Moo(curr_num - (before + (3 + index)), index - 1, before);
};

console.log(Moo(N, index, len));
