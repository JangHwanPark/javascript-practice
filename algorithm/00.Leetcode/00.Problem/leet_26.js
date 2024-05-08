/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p2 = 0;
    let test = 2;

    for (let i = 1; i < nums.length; i++) {
        console.log('idx :', p2, i, 'nums :', nums[p2], nums[i], nums[test])
        if (nums[p2] !== nums[i]) {
            nums[++p2] = nums[i];
        }
    }
    console.log(p2, nums[p2])

    return p2 + 1;
};

let nums = [1,1,2]
console.log(removeDuplicates(nums))