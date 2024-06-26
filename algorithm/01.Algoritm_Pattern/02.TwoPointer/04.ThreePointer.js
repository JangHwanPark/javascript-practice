function LoopThreePointerArithmeticTriplets(nums, diff) {
    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
                    count++;
                }
            }
        }
    }

    return count;
}


function ThreePointerArithmeticTriplets(nums, diff) {
    let i = 0
    let j = 1;
    let k = j + 1;
    let count = 0;
    let numsLength = nums.length;

    while (j < numsLength - 1) {
        if (nums[j] - nums[i] === diff) {
            if (nums[k] - nums[j] === diff) count++;

            if (k !== numsLength - 1) {
                k++;
                continue
            }
        }

        if (j !== numsLength - 2 && k !== numsLength - 1) {
            j++;
            k++;
            continue
        }

        i++;
        j = i + 1;
        k = j + 1;
    }

    return count;
}

let nums = [0,1,4,6,7,10], diff = 3; // 2
let nums1 = [4,5,6,7,8,9], diff1 = 2 // 2
console.log(arithmeticTriplets(nums, diff));
console.log(arithmeticTriplets(nums1, diff1));