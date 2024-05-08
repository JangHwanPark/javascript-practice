function findWordsContaining(words, x) {
    const res = [];
    words.forEach((currentValue, idx) => {
        if (currentValue.split('').includes(x)) res.push(idx);
    });
    return res;
}

let words1 = ["leet","code"], x1 = "e";
let words2 = ["abc","bcd","aaaa","cbc"], x2 = "a";
let words3 = ["abc","bcd","aaaa","cbc"], x3 = "z";
console.log(findWordsContaining(words1, x1));
console.log(findWordsContaining(words2, x2));
console.log(findWordsContaining(words3, x3));