// Lexicographically Smallest Palindrome
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let start = 0, end = s.length - 1;
    const strArr = s.split('');

    while (start < end) {
        if (strArr[start] > strArr[end]) {
            strArr[start] = strArr[end];
        }

        if (strArr[start] < strArr[end]) {
            strArr[end] = strArr[start];
        }

        start++;
        end--;
    }

    return strArr.join('');
};

let s = "egcfe";
makeSmallestPalindrome(s)