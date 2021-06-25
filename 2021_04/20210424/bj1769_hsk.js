const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().split('\n')[0]
  : `1234567`
).split('\n');

//// parseInt했다가 도로 toString할거라면 parseInt를 하지 않는 쪽이 깔끔할 것 같아요!
let N = parseInt(stdin);
let converting_count = 0;

//// 함수내에서 계산하고 출력하고 다 하는게 음.. 깔끔하지 않은 것 같습니다.
//// 함수에서는 값을 계산하여 반환만 하고 출력은 별개로 하는건 어떨까요?
const convertQuestion = (num) => {
  let num_list = num.toString().split('');
  if (num_list.length <= 1) {
    console.log(converting_count);
    console.log(parseInt(num) % 3 === 0 ? `YES` : `NO`);
    return;
  }

  let digit_sum = num_list.reduce((sum, value) => {
    return sum + parseInt(value);
  }, 0);
  converting_count++;
  return convertQuestion(digit_sum);
};

convertQuestion(N);
