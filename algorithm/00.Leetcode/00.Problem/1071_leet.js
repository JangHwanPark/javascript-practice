/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const len = gcd(str1.length, str2.length);
    return str1.substring(0, len);
};

let str1 = "ABCABC", str2 = "ABC"
let str3 = "ABABAB", str4 = "ABAB"
let str5 = "LEET", str6 = "CODE"
gcdOfStrings(str1, str2)
gcdOfStrings(str3, str4)
gcdOfStrings(str5, str6)