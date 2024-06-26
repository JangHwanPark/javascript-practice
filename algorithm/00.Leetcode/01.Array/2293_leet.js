function minMaxGame(nums) {
    if (nums.length === 1) return nums;
    let newNums = [];
    let flag = true;

    for (let i = 0; i < nums.length; i = i + 2) {
        if (flag) {
            let val = Math.min(nums[i], nums[i + 1]);
            newNums.push(val);
            flag = false;
        } else {
            let val = Math.max(nums[i], nums[i + 1]);
            newNums.push(val);
            flag = true;
        }
    }

    return minMaxGame(newNums);
}

let nums1 = [1,3,5,2,4,8,2,2]; // 1
let nums2 = [3]; // 3
console.log(minMaxGame(nums1));
console.log(minMaxGame(nums2));