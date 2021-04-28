//문제 풀이 실패
//답안 보고 다시 풀이함

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `3 3
1 2
2 3
3 1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const NM = input().split(' ');
const N = parseInt(NM[0]); //반 친구 수
const M = parseInt(NM[1]); //관계도 수
let pairs = [];
let isVisited = new Array(N + 1).fill(false);

for (let i = 0; i < M; i++) {
  const friends = input().split(' ');
  if (friends[0] > friends[1]) {
    pairs.map((value) => {
      if (friends[1] == value.u) {
        value.v.push(friends[0]);
      }
    });
  } else pairs.push({ u: friends[0], v: friends[1].split() });
}

const maxPairs = (checkNum, count) => {
  if (checkNum > N) return count;
  if (isVisited[checkNum]) return maxPairs(checkNum + 1, count);

  let result = 0;

  const friendsList = pairs.filter((value) => value.u === checkNum);
  console.log(friendsList);
  pairs[checkNum].v.map((value) => {
    if (isVisited[value]) {
      isVisited[value] = true;
      result = Math.max(result, maxPairs(checkNum + 1, count + 1));
      isVisited[value] = false;
    }
  });
  return Math.max(result, maxPairs(checkNum + 1, count));
};

let cntPair = maxPairs(0, 0);
cntPair = cntPair * 2;
console.log(N > cntPair ? cntPair + 1 : cntPair);
