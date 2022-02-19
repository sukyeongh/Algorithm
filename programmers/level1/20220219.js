function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;
  sizes.map((businessCard) => {
    let [cardWidth, cardHeight] = businessCard.sort((a, b) => a - b);
    if (maxWidth < cardWidth) {
      maxWidth = cardWidth;
    }
    if (maxHeight < cardHeight) {
      maxHeight = cardHeight;
    }
  });

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
