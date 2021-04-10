const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5
55 185
58 183
88 186
60 175
46 155`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = input();
const bulk_list = [];

for (let i = 0; i < N; i++) {
  let [w, h] = input().split(' ').map(Number);
  bulk_list.push({ weight: w, height: h, rank: 1 });
}

const rank = bulk_list.map((item) => {
  for (let j = 0; j < N; j++) {
    if (item.weight < bulk_list[j].weight && item.height < bulk_list[j].height) {
      //현재 자신의 몸무게와 키가 더 작을 경우 다른 사람의 랭크를 증가시켜야함
      item.rank += 1;
    }
  }
  return item.rank;
});

console.log(rank.join(' '));
