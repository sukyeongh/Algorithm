// 1. 하나의 값을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// 3. 여러 줄의 값들을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n + 1);
const [m, ...m_arr] = input.slice(n + 1);

// 재귀함수 Tips
// 1. 종료 조건을 설정하고, N을 종료 조건에 수렴하도록 하라.
// 2. 모든 재귀는 반복문으로 가능하고, 함수 호출이 너무 많은 경우 반복문을 고민해라.
// 3. 한 함수가 자신을 여러번 호출해야하는 경우를 중복을 해결할 수 있는 방법을 고민해라.
// f(n) = f(n-1) +f(n-2)
// 4. 재귀로 완전 탐색을 하고 싶어서 반복문을 사용할 경우, 다음 반복문 루틴에 영향이 없도록 해라

// 1) n=1(초기값)에 대하여 함수안에 식을 구현해 놓는다.
// 2) n=k일때 함수가 성립한다고 가정한다.
// 3) n = k+1일때 n=k일때와의 연관성을 탐구한 후 코딩을 한다.
