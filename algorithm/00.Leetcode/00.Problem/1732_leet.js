function largestAltitude(gain) {
    let sum = [0];
    let res = 0;

    for (let i = 0; i < gain.length; i++) {
        sum[i + 1] = sum[i] + gain[i];
    }

    for (let j = 0; j < sum.length; j++) {
        res = Math.max(res, sum[j])
    }

    return res;
}

let gain = [-5, 1, 5, 0, -7];
largestAltitude(gain)