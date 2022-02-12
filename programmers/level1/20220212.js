function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  return money < totalPrice ? totalPrice - money : 0;
}

console.log(solution(3, 20, 4));
