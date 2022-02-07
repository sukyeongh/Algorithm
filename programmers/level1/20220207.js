function solution(n, m) {
  let euclidean = (a, b) => (a % b === 0 ? b : euclidean(b, a % b));
  let gcf = euclidean(n, m);
  let lcm = (n * m) / gcf;

  return [gcf, lcm];
}
