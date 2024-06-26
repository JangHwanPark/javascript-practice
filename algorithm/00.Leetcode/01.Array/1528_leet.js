function restoreString(s, indices) {
    let res = [];

    indices.forEach((val, idx) => {
        res[val] = s[idx];
    });

    return res.join('');
}

let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];
restoreString(s, indices)