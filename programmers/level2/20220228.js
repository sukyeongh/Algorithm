function solution(s) {
  var str = [];
  for (var i = 0; i < s.length; i++) {
    if (str[str.length - 1] != s[i]) {
      str.push(s[i]);
    } else {
      str.pop();
    }
  }
  return str.length > 0 ? 0 : 1;
}

console.log(solution('baabaa'));
