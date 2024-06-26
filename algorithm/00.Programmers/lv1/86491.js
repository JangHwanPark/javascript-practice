// 최소 직사각형
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    console.log('rotated', rotated)
    let maxSize = [0, 0];
    console.log('maxSize', maxSize)
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    });
    return maxSize[0] * maxSize[1];
}

let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
let sizes1 = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
let sizes2 = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];
solution(sizes)
solution(sizes1)
solution(sizes2)