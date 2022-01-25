function solution(s) {
  let numObj = new Map();
  numObj.set('zero', 0);
  numObj.set('one', 1);
  numObj.set('two', 2);
  numObj.set('three', 3);
  numObj.set('four', 4);
  numObj.set('five', 5);
  numObj.set('six', 6);
  numObj.set('seven', 7);
  numObj.set('eight', 8);
  numObj.set('nine', 9);

  let num = '';
  let answer = [];
  s.split('').forEach((val) => {
    if (val >= 0 && val <= 9) {
      answer.push(parseInt(val));
    } else {
      num += val;
    }

    if (numObj.has(num)) {
      answer.push(numObj.get(num));
      num = '';
    }
  });
  return parseInt(answer.join(''));
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));

// 엄청 깔끔한 풀이
// function solution(s) {
//   let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//   var answer = s;

//   for (let i = 0; i < numbers.length; i++) {
//     let arr = answer.split(numbers[i]);
//     answer = arr.join(i);
//   }

//   return Number(answer);
// }
