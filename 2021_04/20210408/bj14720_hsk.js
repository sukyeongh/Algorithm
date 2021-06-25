const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `7
0 1 2 0 1 2 0`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//// 변수 이름이 간결명확하고 알고리즘도 깔끔하네용 굳
let store_num = input(); //가게의 개수
let store_list = input().split(' '); //가게 리스트

let drink_count = 0;
let next_milk = 0;

for (let i = 0; i < store_num; i++) {
  if (parseInt(store_list[i]) === next_milk) {
    next_milk = (next_milk + 1) % 3;
    drink_count++;
  }
}

console.log(drink_count);
