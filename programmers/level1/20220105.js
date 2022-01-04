function solution(array, commands) {
  var answer = [];
  commands.map((item) => {
    const [start, end, findIdx] = item;
    const sliceArray = array.slice(start - 1, end);

    sliceArray.sort((a, b) => a - b);
    answer.push(sliceArray[findIdx - 1]);
  });

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
