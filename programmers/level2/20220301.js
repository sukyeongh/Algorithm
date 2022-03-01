const getGDC = (n, m) => {
  if (n % m === 0) return m;

  return getGDC(m, n % m);
};

function solution(w, h) {
  return w * h - (w + h - getGDC(w, h));
}

console.log(solution(8, 12));
