/**
 * 조합 함수는 주어진 집합(여기서는 1부터 n까지의 숫자)에서
 * r개의 원소를 선택하는 모든 가능한 조합(순서가 중요하지 않음)을 생성
 * 1부터 5까지의 숫자 중에서 3개를 선택하는 모든 조합을 출력
 */
function combinations(combo, start, n, r) {
    if (r === 0) {
        console.log(combo.join(" "));
        return;
    }

    for (let i = start; i <= n; i++) {
        combo.push(i);
        combinations(combo, i + 1, n, r - 1);
        combo.pop();
    }
}

const n = 5, r = 3;
combinations([], 1, n, r);