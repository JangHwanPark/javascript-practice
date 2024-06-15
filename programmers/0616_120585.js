function solution(array, height) {
    let cnt = 0;
    array.forEach(item => {
        if (item > height) cnt++;
    })
    return cnt;
}

let a = [149, 180, 192, 170]
let h = 167

console.log(solution(a, h))