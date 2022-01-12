function solution(seoul) {
  const kimIdx = seoul.indexOf('Kim');
  return `김서방은 ${kimIdx}에 있다`;
}

console.log(solution(['Jane', 'Kim']));
