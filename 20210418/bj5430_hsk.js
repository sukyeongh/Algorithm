const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim().split('\n')
  : `4
RDD
4
[1,2,3,4]
DD
1
[42]
RRD
6
[1,1,2,3,5,8]
D
0
[]`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const output = [];

const ac = (list, commands) => {
  let is_reverse = false;
  for (const command of commands) {
    if (command === 'R') is_reverse = !is_reverse;
    else {
      if (list.length == 0) return 'error';
      if (is_reverse) list.pop();
      else list.shift();
    }
  }
  if (is_reverse) return '[' + list.reverse().join(',') + ']';
  //// 사소한 부분이지만, 이 부분은 else를 빼도 될 것 같습니다
  else return '[' + list.join(',') + ']';
};

for (let i = 0; i < N; i++) {
  const commands = input().replace('RR', '').split('');
  const list_size = input();
  const list_element = input().replace('[', '').replace(']', '').split(',');

  if (list_size == 0) list_element.pop();
  output.push(ac(list_element, commands));
}
console.log(output.join('\n'));
