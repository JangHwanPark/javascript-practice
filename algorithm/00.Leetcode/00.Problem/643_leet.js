/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number|null}
 */
function findMaxAverage(nums, k) {
    let maxSum = 0, tempSum = 0;
    if (nums.length < k) return null;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
        console.log('maxSum :', maxSum)
    }

    console.log('========')
    tempSum = maxSum;
    console.log('tempSum :', tempSum);
    for (let i = k; i < nums.length; i++) {
        tempSum = tempSum + nums[i] - nums[i - k];
        console.log('condition1', 'tempSum2 :', tempSum, 'maxSum :', maxSum);
        maxSum = Math.max(tempSum, maxSum);
        console.log('condition2', 'maxSum2 :', maxSum, 'maxSum :', maxSum);
    }

    return maxSum / k;
}

let nums = [1,12,-5,-6,50,3], k = 4;
let nums2 = [5], k2 = 1;
findMaxAverage(nums, k)