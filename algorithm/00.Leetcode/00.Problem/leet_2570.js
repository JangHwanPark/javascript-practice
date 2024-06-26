/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const hashMap = new Map();

    for (const [id, value] of nums1) {
        hashMap.set(id, (hashMap.get(id) || 0) + value);
    }

    for (const [id, value] of nums2) {
        hashMap.set(id, (hashMap.get(id) || 0) + value);
    }

    const result = [...hashMap.entries()];
    return result.sort((a, b) => a[0] - b[0]);
};

let nums1 = [[1,2],[2,3],[4,5]];
let nums2 =[[1,4],[3,2],[4,1]];
console.log(mergeArrays(nums1, nums2))