function digitSum(s, k) {
    while (s.length > k) {
        let res = "";
        for (let i = 0; i < s.length; i += k) {
            let part = s.substring(i, i + k);
            let sum = 0;
            for (let j = 0; j < part.length; j++) {
                sum += +part[j];
            }
            res += sum.toString();
        }
        s = res;
    }
    return s;
}

let s = "11111222223", k = 3;
console.log('digitSum :', digitSum(s, k));