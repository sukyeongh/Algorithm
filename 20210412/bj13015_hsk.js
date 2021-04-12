const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `5`).split('\n');

const N = parseInt(stdin[0]);

//// 전체적으로 가독성이 많이 떨어집니다 ㅠㅠ
//// 코드 작성 의도를 설명하는 수단으로 '변수 이름'과 '함수 이름'이 제일 중요한 역할을 한다고 생각하는데
//// 변수 이름은 아무것도 설명하지 않고, 함수는 아예 만들어지지도 않아서 어떤 의도로 작성했는지를 알기 어려워요
//// 혹 개선 방향을 잡기 힘들다면, 제 코드나 승빈이 코드가 참고가 되었으면 좋겠습니다
  //// 진홍: https://www.acmicpc.net/source/24870384
  //// 승빈: https://www.acmicpc.net/source/24882658

//a,b,c,d를 맨 위 꼭짓점으로 설정하였음
//a,b는 n번째 줄까지 증가했다가 n번째 이후 감소함
//c,d는 n번쨰 줄까지 감소했다가 n번째 이후 증가함
let a = 0;
let b = N - 1;
let c = 3 * N - 3;
let d = 4 * N - 4;
for (let i = 1; i < 2 * N; i++) {
  if (i === 1 || i === 2 * N - 1) {
    for (let j = a; j <= b; j++) process.stdout.write('*');
    for (let j = b + 1; j < c; j++) process.stdout.write(' ');
    for (let j = c; j <= d; j++) process.stdout.write('*');
  } else {
    for (let j = 0; j < a; j++) process.stdout.write(' ');
    process.stdout.write('*');
    for (let j = a + 1; j < b; j++) process.stdout.write(' ');
    process.stdout.write('*');
    for (let j = b + 1; j < c; j++) process.stdout.write(' ');
    if (b !== c) process.stdout.write('*'); //b랑 c랑 같은경우(n번째 줄 출력 X)
    for (let j = c + 1; j < d; j++) process.stdout.write(' ');
    process.stdout.write('*');
  }
  process.stdout.write('\n');

  if (i < N) {
    a++;
    b++;
    c--;
    d--;
  } else {
    a--;
    b--;
    c++;
    d++;
  }
}
