const fs = require('fs');
const stdin = process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().trim() : `(()[[]])([])`;

const bracket_arr = stdin.split('');

const pair_Brackeet = (brackets, start_index, end_index) => {
  if (start_index > end_index) return 1;

  let pair_start_index = start_index;
  let no_pair_round_cnt = 0;
  let no_pair_square_cnt = 0;
  let value = 0;

  for (let i = start_index; i <= end_index; i++) {
    let curr_bracket = brackets[i];
    if (curr_bracket === '(') no_pair_round_cnt++;
    else if (curr_bracket === ')') no_pair_round_cnt--;
    else if (curr_bracket === '[') no_pair_square_cnt++;
    else if (curr_bracket === ']') no_pair_square_cnt--;

    if (no_pair_round_cnt < 0 || no_pair_square_cnt < 0) return 0;

    if (no_pair_round_cnt === 0 && no_pair_square_cnt === 0) {
      if (brackets[pair_start_index] === '(') value += 2 * pair_Brackeet(brackets, pair_start_index + 1, i - 1);
      else value += 3 * pair_Brackeet(brackets, pair_start_index + 1, i - 1);
      pair_start_index = i + 1;
    }
  }

  if (no_pair_round_cnt != 0 || no_pair_square_cnt != 0) return 0;

  return value;
};

console.log(pair_Brackeet(bracket_arr, 0, bracket_arr.length - 1));
