// 어느부분이 틀린지 잘 모르겠습니다.
const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `10 10`).split(' ');

const N = parseInt(stdin[0]);
let minute = parseInt(stdin[1]);

let floor = new Array(N).fill(0);
let binaryToDecimal = [];

let rule_all = 1;
let rule_even = 2;
let rule_odd = 3;
let rule_3k_1 = 4;
let rules = [rule_all, rule_even, rule_odd, rule_3k_1];

const permute = (arr) => {
  return arr.reduce(
    (list, element) => {
      let newlist = [];
      list.forEach((value) => {
        for (let i = value.length; i >= 0; i--) {
          let new_value = [].concat(value);
          new_value.splice(i, 0, element);
          newlist.push(new_value);
        }
      });
      return newlist;
    },
    [[]]
  );
};

const calculate_minutes = (floor, minute, condition) => {
  if (minute === 0) return minute;
  if (condition === rule_all) {
    for (let i = 0; i < floor.length; i++) {
      floor[i] ^= 1;
      minute--;
    }
  } else if (condition === rule_even) {
    for (let i = 0; i < floor.length; i += 2) {
      floor[i] ^= 1;
      minute--;
    }
  } else if (condition === rule_odd) {
    for (let i = 1; i < floor.length; i += 2) {
      floor[i] ^= 1;
      minute--;
    }
  } else {
    for (let i = 0; i < floor.length; i += 3) {
      floor[i] ^= 1;
      minute--;
    }
  }
  return minute;
};

let permute_rules = permute(rules);
binaryToDecimal.push(0);
for (let i = 0; i < permute_rules.length; i++) {
  let curr_minute_left = minute;
  floor = new Array(N).fill(0);
  for (let j = 0; j < 4; j++) {
    curr_minute_left = calculate_minutes(floor, curr_minute_left, permute_rules[i][j]);
    if (curr_minute_left >= 0) binaryToDecimal.push(parseInt(floor.join(''), 2));
    else break;
  }
}

let set = new Set(binaryToDecimal);
console.log(set.size);
