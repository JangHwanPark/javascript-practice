function longestOnes(nums, k) {
    let numberLength = nums.length;
    let start = 0;
    let count = 0;
    let longest = 0;
    let flip = k;

    for (let windowEnd = 0; windowEnd < numberLength; windowEnd++) {
        const item = nums[windowEnd];
        if (item === 1) count++;
        else if (item === 0 && flip !== 0) {
            count++;
            flip--;
        } else {
            longest = Math.max(count, longest);
            //console.log(`Loop ${windowEnd}: Window = [${nums.slice(0, start)}] + [[${nums.slice(start, windowEnd +
            // 1)}]] + [${nums.slice(windowEnd + 1)}]`);
            windowEnd = start;
            start++;
            count = 0;
            flip = k;
        }
        // 현재 윈도우 상태 출력
        console.log(`Loop ${windowEnd}: Window = [${nums.slice(0, start)}] + [[${nums.slice(start, windowEnd + 1)}]] + [${nums.slice(windowEnd + 1)}]`);
    }

    longest = Math.max(count, longest);
    return longest;
}

let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2;
let nums1 = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k1 = 3
console.log(longestOnes(nums, k));
console.log(longestOnes(nums1, k1));