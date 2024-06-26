/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let ptr1 = 0, ptr2 = 0;
    const nLen = needle.length;
    const hLen = haystack.length;
    console.log(nLen)

    if (nLen === 0) return 0;

    while (ptr1 < hLen) {
        if (haystack[ptr1] === needle[ptr2]) {
            ptr2++;
        } else {
            ptr1 = ptr1 - ptr2;
            ptr2 = 0;
        }
        ptr1++;

        if (ptr2 === nLen) {
            return ptr1 - ptr2;
        }
    }

    return -1;
};

let haystack1 = "leetcode";
let needle1 = "leeto";
let haystack2 = "sadbutsad";
let needle2 = "sad";
console.log(strStr(haystack1, needle1))
console.log(strStr(haystack2, needle2))