function solution(s) {
  let sList = s.split('');

  sList.sort().reverse();
  return sList.join('');
}

console.log(solution('abAZbcdefg'));
