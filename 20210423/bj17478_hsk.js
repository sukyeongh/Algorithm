const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `2`).split('\n');

let N = parseInt(stdin);

const chatbotResponse = (N, count) => {
  let result = '';
  if (count === 0) result = result.concat('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n');

  let underline = '____'.repeat(count);
  result = result.concat(underline, `"재귀함수가 뭔가요?"\n`);

  if (N < 1) {
    result = result
      .concat(underline, `"재귀함수는 자기 자신을 호출하는 함수라네"\n`)
      .concat(underline, `라고 답변하였지.\n`);

    while (count > 1) {
      result = result.concat('____'.repeat(count - 1), `라고 답변하였지.\n`);
      count--;
    }
    return result.concat(`라고 답변하였지.\n`);
  }

  result = result
    .concat(underline, `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n`)
    .concat(underline, `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n`)
    .concat(underline, `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n`);

  return result.concat(chatbotResponse(--N, ++count));
};

console.log(chatbotResponse(N, 0));
