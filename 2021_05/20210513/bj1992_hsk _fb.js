const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `8
11110000
11110000
00011100
00011100
11110000
11110000
11110011
11110011`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const pixels = [];
let result = [];

for (let i = 0; i < N; i++) {
  pixels.push(input().split(''));
}

const isAllSamePixel = (row, col, N) => {
  for (let i = row; i < row + N; i++) {
    for (let j = col; j < col + N; j++) {
      if (pixels[i][j] !== pixels[row][col]) return false;
    }
  }
  return true;
};

const quardTree = (row, col, N) => {
  //// is_visited라는 이름이 나오게 된 경위를 잘 모르겠습니다. 하나라도 같지 않다=방문한 것?
  //=> 요즘에 자주 쓰다보니 무작정 작성한 것 같네요:) 지적해주셔서 감사합니다.
  //// 함수로 구현하는 편이 더 깔끔하지 않을까요?
  //플래그 변수를 쓰지 않아도 되는데다 이중 for문을 38~39줄 없이 return으로 쉽게 빠져나올 수 있으니까요!
  //수정하였습니다.
  if (isAllSamePixel(row, col, N)) {
    result.push(pixels[row][col]);
  } else {
    result.push('(');
    quardTree(row, col, N / 2);
    quardTree(row, col + N / 2, N / 2);
    quardTree(row + N / 2, col, N / 2);
    quardTree(row + N / 2, col + N / 2, N / 2);
    result.push(')');
  }
};

quardTree(0, 0, N);
console.log(result.join(''));
