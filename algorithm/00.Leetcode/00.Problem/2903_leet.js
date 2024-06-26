// Find Indices With Index and Value Difference
/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
function findIndices(nums, indexDifference, valueDifference) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

const nums = [5,1,4,1];
const indexDifference = 2, valueDifference = 4;
findIndices(nums, indexDifference, valueDifference)