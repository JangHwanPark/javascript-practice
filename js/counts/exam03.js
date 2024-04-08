function factorial(num) {
    if(num === 0) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5)) // 120

function factorial2(num) {
    let res = 1;
    for (let i = num; i > 0; --i) res *= i;
    return res;
}

console.log(factorial2(5))

function fibo(n) {
    if(n === 0 || n === 1) return 1;
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5))