function solution(s) {
    let res = 0;
    let str = s.toString();
    str.split('').forEach((item, index) => res += +item);
    return res;
}

function solution2(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res += +s[i];
    }
    return res;
}

let s = 123;
console.log(solution(s))
console.log(solution2(s))