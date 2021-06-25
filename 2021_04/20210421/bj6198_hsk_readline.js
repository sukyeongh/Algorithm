const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  let N = parseInt(input[0]);
  let buildings = input.filter((val, idx) => idx !== 0);
  let stack = [];
  let count = 0;

  for (let i = 0; i < N; i++) {
    while (stack.length !== 0) {
      if (stack[stack.length - 1] <= buildings[i]) {
        stack.pop();
      } else break;
    }
    stack.push(buildings[i]);
    count += stack.length - 1;
  }
  console.log(count);
  process.exit();
});
