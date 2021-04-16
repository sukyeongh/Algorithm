const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `7 3`).split(' ');

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

let queue = new Queue();

let N = parseInt(stdin[0]);
let order = parseInt(stdin[1]);
let output = [];

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

while (!queue.empty()) {
  for (let i = 1; i < order; i++) {
    queue.push(queue.pop());
  }
  output.push(queue.pop());
}

console.log(`<${output.join(', ')}>`);
