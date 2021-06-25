const fs = require('fs');
const stdin = process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `ABABA`;

const S = stdin;
let cnt_encryption = 0;

const equalString = (str_a, str_b, encryption_str) => {
  if (str_a === str_b) {
    cnt_encryption++;
    cntEncryption(encryption_str);
  }
};

const cntEncryption = (encryption_str) => {
  let e_len = encryption_str.length;
  if (e_len % 2 === 0 || e_len === 1) return;

  let first_half = encryption_str.substr(0, e_len / 2);
  let last_half = encryption_str.substr(e_len / 2, e_len / 2 + 1);

  equalString(first_half, last_half.substr(0, first_half.length), last_half);
  equalString(first_half, last_half.substr(1, first_half.length), last_half);

  first_half = encryption_str.substr(0, e_len / 2 + 1);
  last_half = encryption_str.substr(e_len / 2 + 1, e_len / 2);

  equalString(first_half.substr(0, last_half.length), last_half, first_half);
  equalString(first_half.substr(1, last_half.length), last_half, first_half);
};

cntEncryption(S);
console.log(cnt_encryption);
