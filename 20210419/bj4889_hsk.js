const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim().split('\n')
  : `}{
{}{}{}
{{{}
---`
).split('\n');

let output = [];

for (let i = 0; i < stdin.length; i++) {
  let line = stdin[i];
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
