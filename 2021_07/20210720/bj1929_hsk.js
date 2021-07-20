const fs = require('fs');
const [M, N] = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `3 16`)
  .split(' ')
  .map(Number);

let isPrimeNumber = new Array(N + 1).fill(true);
isPrimeNumber[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
  if (isPrimeNumber[i]) {
    let two = 2;
    while (i * two <= N) {
      isPrimeNumber[i * two] = false;
      two++;
    }
  }
}

const results = [];
for (let i = M; i <= N; i++) {
  if (isPrimeNumber[i]) {
    results.push(i);
  }
}
console.log(results.join('\n'));
