/*
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
function countUniqueValuesFn(arr) {
    if (arr.length === 0) return 0;
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i += 1;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

let countUniqueValues = [1, 1, 1, 1, 1, 2]; // 2
let countUniqueValues1 = [1, 1, 1, 2, 2, 3];
let countUniqueValues2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; // 7
let countUniqueValues3 = []; // 0
let countUniqueValues4 = [-2, -1, -1, 0, 1]; // 4
console.log(countUniqueValuesFn(countUniqueValues1))