function solution(array, n) {
    let cnt = 0;

    array.forEach((element) => {
        if (element === n) cnt++;
    })

    return cnt;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1))
console.log(solution([0, 2, 3, 4], 1))