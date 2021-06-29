const fs = require('fs');
let stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `2
3 ABC
5 /HTP`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const T = parseInt(input());
for (let i = 0; i < T; i++) {
  const [repeatNum, str] = input().split(' ');
  let result = [];
  str.split('').map((value) => {
    result.push(value.repeat(parseInt(repeatNum)));
  });
  console.log(result.join(''));
}
