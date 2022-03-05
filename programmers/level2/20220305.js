function solution(number, k) {
  const nums = [];
  for (let i = 0; i < number.length; i++) {
    const now = number[i];
    while (k > 0 && nums[nums.length - 1] < now) {
      nums.pop();
      k--;
    }
    nums.push(now);
  }
  return nums.slice(0, nums.length - k).join('');
}

console.log(solution('4177252841', 4));
