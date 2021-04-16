const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let longest_bar = 0;
  let count = 0;

  while (input.length > 1) {
    let curr_bar = parseInt(input.pop());
    if (curr_bar > longest_bar) {
      count++;
      longest_bar = curr_bar;
    }
  }
  console.log(count);
  process.exit();
});
