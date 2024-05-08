// 문자열 다루기 기본
function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return s.split('').every(c => !isNaN(c));
    }
    return false;
}

// 정규식 사용한 솔루션
function other(s) {
    let regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}

let s = "a234";
let s1 = "1234";
console.log(solution(s));
console.log(solution(s1));
console.log(other(s));
console.log(other(s1));