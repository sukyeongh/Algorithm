const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `24`).split('\n');

const N = parseInt(stdin);
const starArr = Array.from(Array(N), () => Array(2 * N - 1).fill(''));

const drawStar = (x, y, len) => {
  if (len === 3) {
    starArr[x][y] = '*';
    starArr[x + 1][y - 1] = '*';
    starArr[x + 1][y + 1] = '*';
    for (let i = -2; i < 3; i++) {
      starArr[x + 2][y + i] = '*';
    }
    return;
  }

  let currLen = parseInt(len / 2);
  drawStar(x, y, currLen);
  drawStar(x + currLen, y - currLen, currLen);
  drawStar(x + currLen, y + currLen, currLen);
};

//// N-1를 상수로 선언하고 topVertexY 식으로 이름을 지어 꼭지점을 의미한다는 힌트가 주어졌으면 이해하기 더 좋았을 것 같아요!
drawStar(0, N - 1, N);
//가장 큰 삼각형부터
//// 이 주석은 없어도 괜찮을 것 같습니다.

for (var i = 0; i < N; i++) {
  let result = '';
  for (var j = 0; j < 2 * N - 1; j++) {
    if (starArr[i][j] == '*') result += '*';
    else result += ' ';
  }
  console.log(result);
}
