let nums = [1, 1, 1, 2, 2, 3];
let counts = {};

nums.forEach(num => {
    if (counts[num]) {
        counts[num]++;
    } else {
        counts[num] = 1;
    }
});

console.log(counts);