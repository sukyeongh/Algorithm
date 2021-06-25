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
const N = parseInt(NM[0]);
const M = parseInt(NM[1]);
const pairs = Array.from(Array(N), () => Array().fill(''));
let isVisited = new Array(N).fill(false);

for (let i = 0; i < M; i++) {
  const friends = input().split(' ');
  let student1_index = friends[0] - 1;
  let student2_index = friends[1] - 1;
  if (student1_index > student2_index) {
    temp = student2_index;
    student2_index = student1_index;
    student1_index = temp;
  }
  pairs[student1_index].push(student2_index);
}

const maxPairs = (checkNum, count) => {
  if (checkNum === N) return count;
  if (isVisited[checkNum]) return maxPairs(checkNum + 1, count);

  let result = 0;

  pairs[checkNum].map((value) => {
    if (!isVisited[value]) {
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
