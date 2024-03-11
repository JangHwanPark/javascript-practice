let nums = [1,1,1,2,2,3];
let counts = new Map();
nums.forEach(num => {
    counts.set(num, (counts.get(num) || 0) + 1);
});


console.log(counts)