const fs = require('fs');
const [x, y, w, h] = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `6 2 10 3`
).split(' ');

const minX = Math.min(w - x, x);
const minY = Math.min(h - y, y);

console.log(Math.min(minX, minY));
