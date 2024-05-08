// 1816 : Truncate Sentence
function truncateSentence(s, k) {
    const res = [];
    let tmp = s.split(' ')
    for (let i = 0; i < k; i++) {
        res.push(tmp[i]);
    }
    return res.join(' ')
}

let s = "Hello how are you Contestant";
let k = 4;
truncateSentence(s, k) // Hello how are you
console.log(truncateSentence(s, k))