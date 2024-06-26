function solution(arr) {
    let ans = 0;

    for(let i = 0; i < arr.length; i++) {
        ans += arr[i];
    }

    return ans / arr.length;
}

console.log(solution([1,2,3,4]))

/* reduce()를 사용한 풀이 */
function average(arr) {
    return arr.reduce((a, b) => a + b) / arr.length
}

console.log(average([1,2,3,4]))