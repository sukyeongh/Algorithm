function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      return word
        .split('')
        .map((char, idx) => (idx % 2 ? char.toLowerCase() : char.toUpperCase()))
        .join('');
    })
    .join(' ');
}
