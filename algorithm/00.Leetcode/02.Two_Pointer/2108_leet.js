// Loop 구현
/**
 * @param {string[]} words
 * @return {string}
 */
function firstPalindrome(words) {
    for (let word of words) {
        let isPalindrome = true;
        let i = 0;
        let j = word.length - 1;

        while (i < j) {
            if (word[i] !== word[j]) {
                isPalindrome = false;
                break;
            }

            i++;
            j--;
        }

        if (isPalindrome) {
            return word;
        }
    }

    return "";
}

/**
 * @param {string[]} words
 * @return {string}
 */
function firstPalindromeLoop2(words) {
    // 배열의 각 단어에 대해 순회
    for (let word of words) {
        let isPalindrome = true; // 현재 단어가 팰린드롬인지 가정
        for (let i = 0, j = word.length - 1; i < j; i++, j--) {
            if (word[i] !== word[j]) {
                isPalindrome = false; // 앞뒤 문자가 다르면 팰린드롬이 아님
                break; // 더 이상 확인할 필요 없으므로 반복 종료
            }
        }
        if (isPalindrome) {
            return word; // 팰린드롬 단어를 찾으면 즉시 반환
        }
    }
    return ""; // 팰린드롬 단어가 없으면 빈 문자열 반환
}

// Good Solution
/**
 * @param {string[]} words
 * @return {string}
 */
function firstPalindrome(words) {
    for (let word of words) { // 배열의 각 단어에 대해 순회
        if (isPalindrome(word)) { // 현재 단어가 팰린드롬인지 확인
            return word; // 팰린드롬이면 해당 단어를 반환
        }
    }
    return ""; // 팰린드롬 단어가 없으면 빈 문자열 반환
}

function isPalindrome(word) {
    let left = 0;
    let right = word.length - 1;
    while (left < right) { // 단어 내에서 문자를 앞뒤로 비교
        if (word[left] !== word[right]) {
            return false; // 하나라도 다르면 팰린드롬이 아님
        }
        left++; // 왼쪽 포인터를 오른쪽으로
        right--; // 오른쪽 포인터를 왼쪽으로
    }
    return true; // 모든 문자가 일치하면 팰린드롬임
}

let words = ["abc","car","ada","racecar","cool"]; // "ada"
let words1 = ["notapalindrome","racecar"]; // "racecar"
let words2 = ["def","ghi"]; // ""
console.log(firstPalindrome(words));