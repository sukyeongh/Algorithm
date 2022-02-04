process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const [a, b] = data.split(' ').map(Number);
  for (let i = 0; i < b; i++) {
    console.log('*'.repeat(a));
  }
});
