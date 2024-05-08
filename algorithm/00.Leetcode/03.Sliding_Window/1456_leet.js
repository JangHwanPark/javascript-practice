// Array 자료구조 사용
function maxVowels(s, k) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let result = 0;
    let counter = 0;

    for (let i = 0; i < k; i++) {
        if (VOWELS.includes(s[i])) counter += 1;
    }

    result = counter;

    for (let i = k; i < s.length; i++) {
        if (VOWELS.includes(s[i])) counter += 1;
        if (VOWELS.includes(s[i - k])) counter -= 1;
        result = Math.max(counter, result);
    }

    console.log(result)
    return result;
}

// Set 자료구조 사용
function maxVowelsSet(s, k) {
    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
    let result = 0;
    let counter = 0;

    for (let i = 0; i < k; i++) {
        if (VOWELS.has(s[i])) counter += 1;
    }

    result = counter;

    for (let i = k; i < s.length; i++) {
        if (VOWELS.has(s[i])) counter += 1;
        if (VOWELS.has(s[i - k])) counter -= 1;
        result = Math.max(counter, result);
    }

    console.log(result)
    return result;
}

let s = "abciiidef", k = 3; // 3
let s1 = "aeiou", k1 = 2; // 2
let s2 = "leetcode", k2 = 3; // 2
maxVowels(s, k);
maxVowels(s1, k1);
maxVowels(s2, k2);

maxVowelsSet(s, k);
maxVowelsSet(s1, k1);
maxVowelsSet(s2, k2);