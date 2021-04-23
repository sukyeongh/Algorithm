const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().split('\n')[0]
  : `1234567`
).split('\n');

let N = parseInt(stdin);
let converting_count = 0;

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
