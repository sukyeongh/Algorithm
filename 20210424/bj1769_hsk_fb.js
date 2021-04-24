const fs = require('fs');
const N = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().split('\n')[0] : `1234567`).split(
  '\n'
);

let converting_count = 0;

//// 함수내에서 계산하고 출력하고 다 하는게 음.. 깔끔하지 않은 것 같습니다.
//// 함수에서는 값을 계산하여 반환만 하고 출력은 별개로 하는건 어떨까요?
//=> 바꿔보았습니다.
const convertQuestion = (num) => {
  let num_list = num.toString().split('');
  if (num_list.length <= 1) {
    return parseInt(num);
  }

  let digit_sum = num_list.reduce((sum, value) => {
    return sum + parseInt(value);
  }, 0);
  converting_count++;
  return convertQuestion(digit_sum);
};

let result = convertQuestion(N);
console.log(converting_count);
console.log(result % 3 === 0 ? `YES` : `NO`);
