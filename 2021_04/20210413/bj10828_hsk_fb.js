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

//// 클래스 깔꼼깔꼼~
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

//// 메인 깔꼼깔꼼~
const stack = new Stack();
const N = parseInt(input());
//// 출력하기 위해 담는 변수니 output으로 이름 짓는건 어때요? 요거라면 어떤 문제든 계속 같은 이름으로 사용해도 자연스러울 것 같아요
//=> 좋은 것 같습니다
const output = [];

for (let i = 0; i < N; i++) {
  let command = input().split(' ');

  if (command[0] === 'push') stack.push(parseInt(command[1]));
  else if (command[0] === 'pop') output.push(stack.pop());
  else if (command[0] === 'size') output.push(stack.size());
  else if (command[0] === 'empty') output.push(stack.empty());
  else output.push(stack.top());
}

console.log(output.join('\n'));
