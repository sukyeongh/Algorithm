function solution(s, n) {
  return s
    .split('')
    .map((alphabet) => {
      if (alphabet === ' ') {
        return ' ';
      }

      const isUpperAlphabet = alphabet.toUpperCase() === alphabet;
      let code = alphabet.charCodeAt() + n;
      if ((isUpperAlphabet && code > 90) || (!isUpperAlphabet && code > 122)) {
        code -= 26;
      }
      return String.fromCharCode(code);
    })
    .join('');
}

console.log(solution('a B z', 4));
