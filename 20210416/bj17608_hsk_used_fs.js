const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').trim().split('\n')
  : `5
5
4
3
2
1`
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

let stack = new Stack();
let N = parseInt(input());

for (let i = 0; i < N; i++) {
  stack.push(parseInt(input()));
}

let longest_bar = 0;
let count = 0;

while (!stack.empty()) {
  let curr_bar = stack.pop();
  if (curr_bar > longest_bar) {
    count++;
    longest_bar = curr_bar;
  }
}

console.log(count);
