// 크기가 작은 부분 문자열
function solution(t, p) {
    let c = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        let ans = t.slice(i, i + p.length);
        if (+p >= +ans) {
            c++;
        }
    }

    return c;
}

console.log(solution("3141592", "271"))
console.log(solution("500220839878", "7"))
console.log(solution("10203", "15"))