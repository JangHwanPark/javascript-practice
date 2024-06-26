// 런타임 54ms
function isSubsequence(s, t) {
    let sPointer = 0;   // s의 포인터
    let tPointer = 0;   // t의 포인터

    // t를 순회하면서 s의 모든 문자가 순서대로 나오는지 확인
    while (tPointer < t.length && sPointer < s.length) {

        // s의 다음 문자로 이동
        if (s[sPointer] === t[tPointer]) sPointer++;

        // t의 다음 문자로 이동
        tPointer++;
    }

    // s의 모든 문자를 순회 했다면 s는 t의 서브시퀀스임
    return sPointer === s.length;
}

// 런타임: 31ms
function isSubsequenceRen31ms(s, t) {
    if (s.length > t.length) return false;

    const t_length = t.length;
    let subsequence = 0;

    for (let i = 0; i < t_length; i++) {
        if (s[subsequence] === t[i]) subsequence++;
    }

    return subsequence === s.length;
}

let s1 = "abc", t1 = "ahbgdc";
let s2 = "axc", t2 = "ahbgdc";
console.log(isSubsequence(s1, t1));
console.log(isSubsequence(s2, t2));