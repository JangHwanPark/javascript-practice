function addDigits(num) {
    if (num === 0) return 0;
    else if (num % 9 === 0) return 9;
    else return num % 9;
}

function addDigitsWhile(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

// 199 -> 10
let num = 199;
console.log(addDigits(num))
console.log(addDigitsWhile(num))