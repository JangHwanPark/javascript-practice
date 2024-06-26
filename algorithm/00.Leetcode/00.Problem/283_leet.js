/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let start = 0, end = 0, ans;
    let len = nums.length;

    while (start < len && end < len) {
        if (nums[start] !== 0) start++;
        if (nums[end] === 0) end++;

        if ((start < len && end < len) && (start < end)) {
            ans = nums[start];
            nums[start] = nums[end];
            nums[end] = ans;
        }

        end++;
    }

    return nums;
}

let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));