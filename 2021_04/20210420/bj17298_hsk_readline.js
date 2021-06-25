const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let N = parseInt(input[0]);
  let list = input[1].split(' ').map((v) => parseInt(v));
  let stack = [];
  let result = new Array(N).fill(-1);

  for (let i = 0; i < N; i++) {
    while (stack.length !== 0 && list[stack[stack.length - 1]] < list[i]) {
      result[stack.pop()] = list[i];
    }
    stack.push(i);
  }
  console.log(result.join(' '));

  process.exit();
});
