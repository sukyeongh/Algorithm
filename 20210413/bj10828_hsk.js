const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

class Stack {
  constructor() {
    this.list = [];
  }
  push(item) {
    this.list.push(item);
  }
  pop() {
    if (this.list.length === 0) return -1;
    return this.list.pop();
  }
  size() {
    return this.list.length;
  }
  empty() {
    return this.list.length === 0 ? 1 : 0;
  }
  top() {
    if (this.list.length === 0) return -1;
    return this.list[this.list.length - 1];
  }
}

const stack = new Stack();
const N = parseInt(input());
const callback_num = [];

for (let i = 0; i < N; i++) {
  let command = input().split(' ');

  if (command[0] === 'push') stack.push(parseInt(command[1]));
  else if (command[0] === 'pop') callback_num.push(stack.pop());
  else if (command[0] === 'size') callback_num.push(stack.size());
  else if (command[0] === 'empty') callback_num.push(stack.empty());
  else callback_num.push(stack.top());
}

console.log(callback_num.join('\n'));
