const getLeastDistance = (maps) => {
  let row = maps.length;
  let col = maps[0].length;

  let distance = Array.from(new Array(row), () => new Array(col).fill(0));
  let visited = Array.from(new Array(row), () => new Array(col).fill(false));
  let queue = [[0, 0]];
  let queueCursor = 0;
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  while (queue.length > queueCursor) {
    const [x, y] = queue[queueCursor++];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;
      if (maps[nx][ny] === 0 || visited[nx][ny]) continue;

      distance[nx][ny] = distance[x][y] + 1;
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }

  return distance[row - 1][col - 1];
};

function solution(maps) {
  let leastDistance = getLeastDistance(maps);
  return leastDistance === 0 ? -1 : leastDistance + 1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
