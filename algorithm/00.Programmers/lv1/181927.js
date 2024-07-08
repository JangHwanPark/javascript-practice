function solution(arr) {
  let index = arr.length - 1;
  arr[index] > arr[index - 1] ? arr.push(arr[index] - arr[index - 1])
    : arr.push(arr[index] * 2)
  return arr;
}

const arr = [2, 1, 6];
const arr2 = [5, 2, 1, 7, 5];
console.log(solution(arr))
solution(arr2)