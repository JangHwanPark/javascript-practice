function frequencyCountingPattern(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let value of arr1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }

    for (let value of arr2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) return false;
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}

let arr1 = [1,2,3,2];
let arr2 = [9,1,4,4];
console.log(frequencyCountingPattern(arr1, arr2))