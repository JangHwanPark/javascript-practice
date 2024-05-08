// 자연수 뒤집어 배열로 만들기
function solution(n) {
    const ans = n + '';
    return ans.split('').map((value) => + value).reverse();
}

let n = 12345;
console.log(solution(n));

function explanation(n) {
    let arr = [];

    do {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);

    return arr;
}

let n2 = 123456;
console.log(explanation(n2))