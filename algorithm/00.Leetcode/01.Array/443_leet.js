// 443. String Compression
function compress(chars) {
    // 시작 포인터, 추적할 포인터 초기화
    let startPointer = 0;
    let endPointer = 0;
    let charLength = chars.length;

    while (endPointer < charLength) {
        let count = 0;
        let currentValue = chars[endPointer];

        while (endPointer < charLength && chars[endPointer] === currentValue) {
            endPointer++;
            count++;
        }

        chars[startPointer++] = currentValue;

        if (count > 1) {
            for (let digit of count.toString()) {
                chars[startPointer++] = digit;
            }
        }
    }

    return startPointer;
}

// out : ["a","2","b","2","c","3"]
let chars = ["a","a","b","b","c","c","c"];
let chars1 = ["a"];
let chars2 = ["a","b","b","b","b","b","b","b","b","b","b"," b","b"];
console.log(chars);
console.log(compress(chars));
console.log(chars);
console.log(compress(chars1));