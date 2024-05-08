function increasingTriplet(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) first = num;
        else if (num <= second) second = num;
        else return true;
    }

    return false;
}

let nums1 = [1,2,3,4,5]; // true
let nums2 =

    [5,4,3,2,1]; // false
let nums3 = [2,1,5,0,4,6]; // true
console.log(increasingTriplet(nums1))
console.log(increasingTriplet(nums2))
console.log(increasingTriplet(nums3))