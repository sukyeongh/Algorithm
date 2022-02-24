function solution(s) {
  const sArr = s.split('');
  const temp = [];
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === '(') {
      temp.push(sArr[i]);
    } else {
      if (temp[temp.length - 1] === '(') {
        temp.pop();
      } else {
        temp.push(sArr[i]);
      }
    }
  }
  return temp.length === 0 ? true : false;
}
