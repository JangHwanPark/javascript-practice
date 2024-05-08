// Plus One
function plusOne(digits) {
    let tmp = +digits.join('');
    tmp++
    let res = tmp + '';
    return res.split('');
}

let nums = [1, 2, 3];
plusOne(nums);