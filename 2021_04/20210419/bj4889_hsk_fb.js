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
      //// 이 부분에 continue;를 넣으면 else문을 없앨 수 있어요! 책 클린코드에 의하면 else문은 지양하고 대신 return등의 키워드와 if를 사용하는게 좋다고 합니다.
      //-> 앞으로 고려해서 코딩하면 좋을 것 같아요!
      continue;
    }
    if (stack.length === 0) {
      stack.push('{');
      count++;
    } else {
      stack.pop();
    }
  }
  if (stack.length !== 0) {
    count += parseInt(stack.length / 2);
  }
  output.push(`${i + 1}. ${count}`);
}

console.log(output.join('\n'));
