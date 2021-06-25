const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

class Deque {
  constructor() {
    this.list = [];
  }
  push_front(item) {
    this.list.unshift(item);
  }
  push_back(item) {
    this.list.push(item);
  }
  pop_front() {
    if (this.empty() === 0) {
      return this.list.shift();
    }
    return -1;
  }
  pop_back() {
    if (this.empty() === 0) {
      return this.list.pop();
    }
    return -1;
  }
  size() {
    return this.list.length;
  }
  empty() {
    return this.list.length === 0 ? 1 : 0;
  }
  front() {
    if (this.empty() === 0) {
      return this.list[0];
    }
    return -1;
  }
  back() {
    if (this.empty() === 0) {
      return this.list[this.list.length - 1];
    }
    return -1;
  }
}

const deque = new Deque();
const N = parseInt(input());
const output = [];

for (let i = 0; i < N; i++) {
  let command = input().split(' ');

  if (command[0] === 'push_front') deque.push_front(parseInt(command[1]));
  else if (command[0] === 'push_back') deque.push_back(parseInt(command[1]));
  else if (command[0] === 'pop_front') output.push(deque.pop_front());
  else if (command[0] === 'pop_back') output.push(deque.pop_back());
  else if (command[0] === 'size') output.push(deque.size());
  else if (command[0] === 'empty') output.push(deque.empty());
  else if (command[0] === 'front') output.push(deque.front());
  else output.push(deque.back());
}

console.log(output.join('\n'));
