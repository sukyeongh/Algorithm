const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let output = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let output = [];

  for (let i = 0; i < input.length; i++) {
    let line = input[i];
    let count = 0;
    if (line.includes('-')) break;

    let stack = [];

    for (let char of line) {
      if (char === '{') {
        stack.push('{');
      } else {
        if (stack.length === 0) {
          stack.push('{');
          count++;
        } else {
          stack.pop();
        }
      }
    }
    if (stack.length !== 0) {
      count += parseInt(stack.length / 2);
    }
    output.push(`${i + 1}. ${count}`);
  }

  console.log(output.join('\n'));

  process.exit();
});
