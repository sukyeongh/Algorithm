function solution(n) {
  return Number(
    n
      .toString()
      .split('')
      .map(Number)
      .sort((a, b) => b - a)
      .join('')
  );
}
