/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let ans = nums.sort((a, b) => a - b);
    let ptr1 = 0, ptr2 = ans.length - 1;
    let count = 0;

    while (ptr1 <= ptr2) {
        if (ans[ptr1] + ans[ptr2] < target) {
            count += ptr2 - ptr1;
            ptr1++;
        } else {
            ptr2--;
        }
    }

    return count;
};

let nums = [-1,1,2,3,1], target = 2;
countPairs(nums, target);