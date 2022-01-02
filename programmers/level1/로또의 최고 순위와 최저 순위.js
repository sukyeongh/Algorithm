const getRankInRottos = (cntOfRightNum) => {
  let rank = {
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };

  return rank[cntOfRightNum];
};

function solution(lottos, win_nums) {
  const winNums = new Set(win_nums);
  let winningCnt = 0;
  let unrecognizableCnt = 0;

  lottos.map((value) => {
    if (winNums.has(value)) winningCnt += 1;
    if (value === 0) unrecognizableCnt += 1;
  });

  const maxWinningCnt = winningCnt + unrecognizableCnt;
  return [getRankInRottos(maxWinningCnt), getRankInRottos(winningCnt)];
}
