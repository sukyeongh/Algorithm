function solution(s) {
  return (s.length === 6 || s.length === 4) && s == parseInt(s);
}

console.log(solution('123344'));
