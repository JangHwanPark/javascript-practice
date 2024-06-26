const solution = (a, b) => {
    let temp1 = String(a) + String(b);
    let temp2 = 2 * a * b;
    if (+temp1 < +temp2) return +temp2;
    else return +temp1;
}

let a= 2
let b = 91
console.log(solution(a, b))
console.log(typeof solution(a, b))
console.log(solution(91, 2))
console.log("solution(91, 2): ", typeof solution(91, 2))