function matrixReshape (mat, r, c) {
    let row = mat.length;
    let col = mat[0].length;
    let newM = [[]];

    if (row * col !== r * c) return mat;

    for (let i = 0, k = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (newM[k].length === c) {
                newM.push([]);
                k++;
            }

            newM[k].push(mat[i][j]);
        }
    }

    return newM;
}

let mat = [[1,2],[3,4]], r = 1, c = 4;
matrixReshape(mat, r, c);