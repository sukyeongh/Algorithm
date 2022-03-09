function solution(s) {
  return s
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}

console.log(solution('3people unFollowed me'));
