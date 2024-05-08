/**
 * @param {number[]} nums
 * @return {number}
 */
// 길이 + 2
const removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[j + 2]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

let nums = [1,1,1,2,2,3];
console.log(removeDuplicates(nums))