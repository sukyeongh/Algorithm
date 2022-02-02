function solution(s) {
  let nums = s.split(' ').map(Number);
  let min = Math.min.apply(null, nums);
  let max = Math.max.apply(null, nums);

  return `${min} ${max}`;
}
