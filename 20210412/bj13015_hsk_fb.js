const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `5`).split('\n');

const N = parseInt(stdin[0]);

//// 전체적으로 가독성이 많이 떨어집니다 ㅠㅠ
//// 코드 작성 의도를 설명하는 수단으로 '변수 이름'과 '함수 이름'이 제일 중요한 역할을 한다고 생각하는데
//// 변수 이름은 아무것도 설명하지 않고있고, 함수는 아예 만들어지지도 않아서 어떤 의도로 작성했는지 알기 어려워요

//// 혹 개선 방향을 잡기 힘들다면, 제 코드나 승빈이 코드가 참고가 되었으면 좋겠습니다
//// 진홍: https://www.acmicpc.net/source/24870384
//// 승빈: https://www.acmicpc.net/source/24882658
// => 많이 참고되었습니다. 감사합니다.:)

let first_edge = 0;
let second_edge = N - 1;
let third_edge = 3 * N - 3;

let line_height = 2 * N - 1;

const drawTopBottom = (star_count, space_count) => {
  return '*'.repeat(star_count) + ' '.repeat(space_count) + '*'.repeat(star_count);
};

const drawMiddle = (space_count, isMiddle) => {
  return isMiddle ? '' : ' '.repeat(space_count) + '*';
};

for (let i = 1; i <= line_height; i++) {
  if (i === 1 || i === line_height) {
    process.stdout.write(drawTopBottom(N, third_edge - (second_edge + 1)));
  } else {
    let middle_space = second_edge - (first_edge + 1);
    process.stdout.write(drawMiddle(first_edge, false)); //0부터 계속 증가
    process.stdout.write(drawMiddle(middle_space, false));

    let isMiddle = second_edge === third_edge;
    process.stdout.write(drawMiddle(third_edge - (second_edge + 1), isMiddle));
    process.stdout.write(drawMiddle(middle_space, false));
  }
  process.stdout.write('\n');
  if (i < N) {
    first_edge++;
    second_edge++;
    third_edge--;
  } else {
    first_edge--;
    second_edge--;
    third_edge++;
  }
}
