function solution(numbers) {
  var answer = [];
  let nums = numbers.split('');

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const getPermutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newNum = fixed + arr[i];
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        if (!answer.includes(+newNum) && isPrime(+newNum)) {
          answer.push(+newNum);
        }
        getPermutation(copyArr, newNum);
      }
    }
  };

  getPermutation(nums, '');
  return answer.length;
}

console.log(solution('17'));
