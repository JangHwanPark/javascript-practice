function solution(arr) {
    let minValue = Math.min(...arr);
    let idx = arr.findIndex(value => value === minValue);
    arr.splice(idx, 1);
    return arr.length ? arr : [-1];
}

let arr = [4,3,2,1];
console.log(solution(arr))