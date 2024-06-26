// Two Pointer
function arithmeticTripletsSolution1(nums, diff) {
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

// Hash Table
function arithmeticTripletsSolution2(nums, diff) {
    const set = new Set(nums);
    let count = 0;

    for(let i=nums.length - 1; i>=0; i--) {
        const val1 = nums[i] - diff;
        const val2 = val1 - diff;
        if(set.has(val1) && set.has(val2)) count++;
    }

    return count;
}

function arithmeticTripletsSolution3(nums, diff) {
    const set = new Set()
    let count = 0
    for (let num of nums) {
        if (set.has(num - diff) && set.has(num - 2 * diff)) count++
        set.add(num)
    }
    return count
}

let nums = [0,1,4,6,7,10], diff = 3; // 2
let nums1 = [4,5,6,7,8,9], diff1 = 2 // 2
console.log(arithmeticTriplets(nums, diff));
console.log(arithmeticTriplets(nums1, diff1));