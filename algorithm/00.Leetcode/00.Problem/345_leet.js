/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let tmp = s.split('');
    let start = 0, end = s.length - 1;

    while (start < end) {
        while (start < end && !vowels.has(tmp[start]))
            start++;

        while (start < end && !vowels.has(tmp[end]))
            end--;

        if (start < end) {
            [tmp[start], tmp[end]] = [tmp[end], tmp[start]];
            start++;
            end--;
        }
    }

    return tmp.join('');
}

let s = "hello";
reverseVowels(s);