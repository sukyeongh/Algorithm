//bj14936_wsb 코드 구두설명 후 코딩
const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `10 10`).split(' ');

let N = parseInt(stdin[0]);
let minute = parseInt(stdin[1]);

let cnt_1_bit = 1;

if (minute === 0) {
  console.log(1);
  return;
}

if (N === 1) {
  console.log(2);
  return;
}

if (N === 2) {
  if (minute === 1) console.log(3);
  else console.log(4);
  return;
}

let remain_time_arr = [parseInt(N), parseInt(N / 2 + (N % 2)), parseInt(N / 2), parseInt((N - 1) / 3 + 1)];

for (let i = 0; i < 4; i++) {
  if (remain_time_arr[i] <= minute) cnt_1_bit |= 1 << (i + 1);
}

for (let i = 0; i < 3; i++) {
  if (minute - remain_time_arr[i] < remain_time_arr[3] || (cnt_1_bit & (1 << i)) === 0) {
    continue;
  }
  cnt_1_bit |= 1 << (i + 5);
}

const bit_1_count = (num) => {
  let cnt = 0;
  while (num !== 0) {
    cnt += num % 2;
    num = parseInt(num / 2);
  }
  return cnt;
};

console.log(bit_1_count(cnt_1_bit));
