const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `15
push 1
push 2
front
back
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
front`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

class Queue {
  constructor() {
    this.list = [];
  }
  push(item) {
    this.list.push(item);
  }
  pop() {
    if (this.list.length === 0) return -1;
    return this.list.shift();
  }
  size() {
    return this.list.length;
  }
  empty() {
    return this.list.length === 0 ? 1 : 0;
  }
  front() {
    if (this.list.length === 0) return -1;
    return this.list[0];
  }
  back() {
    if (this.list.length === 0) return -1;
    return this.list[this.list.length - 1];
  }
}

const queue = new Queue();
const N = parseInt(input());
const output = [];

for (let i = 0; i < N; i++) {
  let command = input().split(' ');

  if (command[0] === 'push') queue.push(parseInt(command[1]));
  else if (command[0] === 'pop') output.push(queue.pop());
  else if (command[0] === 'size') output.push(queue.size());
  else if (command[0] === 'empty') output.push(queue.empty());
  else if (command[0] === 'front') output.push(queue.front());
  else output.push(queue.back());
}

console.log(output.join('\n'));
