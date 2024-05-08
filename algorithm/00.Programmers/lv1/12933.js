function solution(n) {
    let ans = [];
    let str = n.toString();
    let sortArr, result;

    for (let i = 0; i < str.length; i++) {
        ans.push(str[i])
    }

    sortArr = ans.sort((a, b) => b - a);
    result = sortArr.join('');
    return parseInt(result)
}