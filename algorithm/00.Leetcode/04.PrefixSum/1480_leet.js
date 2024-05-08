function runningSum(nums, nums2) {
    for (let i = 0; i < nums2.length; i++) {
        nums2[i] = nums2[i] + nums2[i];
        console.log(nums2[i])
    }

    console.log("")

    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i]
        console.log(nums[i])
    }
}

var runningSum2 = function (nums) {
    let sum = 0;
    let res =nums.map((ele) => {
        sum = sum + ele;
        return sum;
    })
    return res;
};

let nums = [1,2,3,4];
let nums2 = [1,2,3,4];
runningSum(nums, nums2);