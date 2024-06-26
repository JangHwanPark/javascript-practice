/*
 * Time Complexity - O(N^2)
 * Space Complexity - O(1)
 */
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; i < arr.length; j++) {
            if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
        }
    }
}

/*
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        else if (sum > 0) right--;
        else left++;
    }
}

let arr = [-3, -2, -1, 0, 1, 2, 3];
let arr2 = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
console.log(sumZero(arr))
console.log(sumZero2(arr2))