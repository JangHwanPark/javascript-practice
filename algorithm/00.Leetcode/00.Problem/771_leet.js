// Jewels and Stones

function numJewelsInStones(jewels, stones) {
    let cnt = 0;

    for (let i = 0; i < stones.length; i++) {
        if (jewels.indexOf(stones[i]) !== -1) cnt++;
    }

    return cnt;
}

let jewels = "aA", stones = "aAAbbbb"; // 3
let jewels2 = "z", stones2 = "ZZ"; // 0
numJewelsInStones(jewels, stones);
//numJewelsInStones(jewels2, stones2);