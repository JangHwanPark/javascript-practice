function canPlaceFlowers(flowerbed, n) {
    let noAdjacent = 0;

    flowerbed.forEach((val, idx, a) => {
        const prev = idx - 1;
        const next = idx + 1;

        console.log(!flowerbed[prev], !flowerbed[idx] ,!flowerbed[next])
        console.log(!flowerbed[prev] && !flowerbed[idx] && !flowerbed[next])
        console.log(flowerbed[prev], flowerbed[idx] ,flowerbed[next])
        console.log(a)
        console.log('===')
        if (!flowerbed[prev] && !flowerbed[idx] && !flowerbed[next]) {
            noAdjacent++;
            flowerbed[idx] = 1;
        }
    });

    return noAdjacent >= n;
}

let flowerbed = [1,0,0,0,1], n = 1;
canPlaceFlowers(flowerbed, n);