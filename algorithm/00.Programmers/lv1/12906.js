function solution(arr)
{
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            stack.push(arr[i])
        }
    }

    return stack;
}

console.log(solution([1,1,3,3,0,1,1]))