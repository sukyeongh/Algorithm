const fs = require('fs');
let stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `23 40`)
  .split(' ')
  .map((value) => parseInt(value));

let hour = stdin[0];
let minute = stdin[1];

minute -= 45;
if (minute < 0) {
  minute += 60;
  hour--;
}
if (hour < 0) {
  hour = 23;
}
console.log(`${hour} ${minute}`);
