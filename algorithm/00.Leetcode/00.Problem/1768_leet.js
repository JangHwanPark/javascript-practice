/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
    let result = '';
    let condition = Math.max(word1.length, word2.length)
    for (let i = 0; i < condition; i++) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
    }
    return result;
}

function mergeAlternatelyTwoPointer(word1, word2) {
    let start = 0, end = 0, result = '';
    while (start < word1.length && end < word2.length) {
        result += (result.length % 2 === 0) ? word1[start++] : word2[end++];
    }

    while (start < word1.length) {
        result += word1[start++];
    }

    while (end < word2.length) {
        result += word2[end++];
    }

    return result;
}

let word1 = "abc", word2 = "pqr";
let word3 = "ab", word4 = "pqrs"
// mergeAlternately(word1, word2);
// mergeAlternately(word3, word4);
mergeAlternatelyTwoPointer(word1, word2);
mergeAlternatelyTwoPointer(word3, word4);