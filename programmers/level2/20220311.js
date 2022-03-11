function solution(dirs) {
  let directions = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let [x, y] = [0, 0];
  let route = new Set();

  for (let dir of dirs) {
    let nx = x + directions[dir][0];
    let ny = y + directions[dir][1];

    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;

    route.add('' + x + y + nx + ny);
    route.add('' + nx + ny + x + y);

    [x, y] = [nx, ny];
  }

  return route.size / 2;
}

console.log(solution('ULURRDLLU'));
