const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `2`).split('\n');

let N = parseInt(stdin);
let result = '';

const chatbotResponse = (N, count) => {
  if (count === 0) result = result.concat('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n');

  let underline = '____'.repeat(count);
  result = result.concat(underline, `"재귀함수가 뭔가요?"\n`);

  if (N < 1) {
    result = result
      .concat(underline, `"재귀함수는 자기 자신을 호출하는 함수라네"\n`)
      .concat(underline, `라고 답변하였지.\n`);

    return;
    //// "재귀호출 부분 뒤에 '라고 답변하였지'를 출력하게 하면" while문을 사용하지 않아도 됩니다.

    //// 지금 작성하신 코드는 반복문의 형태로 쉽게 바꿀 수 있는 꼬리재귀 형태인데 (함수 전체를 while문으로 바꾼다 생각해보십셔. 어렵지 않을겁니다)
    //// 18줄 주석에서 말한것처럼 머리재귀 형태로도 한번 풀어보고 이해하시면 앞으로의 재귀함수 풀이에 도움될 것 같습니다.
    //// 정 모르겠다면 다른 사람 코드 흘깃 보는 한이 있더라도 꼭! while문 없는 풀이 이해해보셔요!
    //=> 이런 방법도 있네요, 훨씬 효율적인 코드인 것 같아요
  }

  result = result
    .concat(underline, `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n`)
    .concat(underline, `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n`)
    .concat(underline, `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n`);

  chatbotResponse(--N, ++count);
  result = result.concat(underline, `라고 답변하였지.\n`);
};

chatbotResponse(N, 0);
console.log(result);
