function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  return answer.length > 2 ? answer : answer + answer.charAt(answer.length - 1).repeat(3 - answer.length);
}

console.log(solution('"z-+.^."'));

//깔끔 풀이
// const solution = (new_id) => {
//   const id = new_id
//     .toLowerCase()
//     .replace(/[^\w\d-_.]/g, '')
//     .replace(/\.{2,}/g, '.')
//     .replace(/^\.|\.$/g, '')
//     .padEnd(1, 'a')
//     .slice(0, 15)
//     .replace(/^\.|\.$/g, '');
//   return id.padEnd(3, id[id.length - 1]);
// };
