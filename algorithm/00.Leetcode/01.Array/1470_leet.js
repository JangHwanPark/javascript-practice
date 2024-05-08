function shuffle(nums, n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[i + n]);
    }

    return result;
}

function inPlaceSolution(nums, n) {
    let i = n - 1;

    for (let j = nums.length - 1; j >= n; j--) {
        nums[j] <<= 10;
        nums[j] |= nums[i];
        i--;
    }

    i = 0;
    for (let j = n; j < nums.length; j++) {
        const nums1 = nums[j] & 1023;
        const nums2 = nums[j] >> 10;
        nums[i] = nums1;
        nums[i + 1] = nums2;
        i += 2;
    }

    return nums;
}

let nums = [2,5,1,3,4,7], n = 3;
console.log(shuffle(nums, n));
console.log(inPlaceSolution(nums, n));