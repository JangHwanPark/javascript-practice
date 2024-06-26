/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let temp = num.toString();
    const tempArr = temp.split('');

    for (let i = 0; i < temp.length; i++) {
        if (temp === '9999') return parseInt(temp);
        if (temp[i] === '6') {
            tempArr[i] = '9';
            break;
        }
    }

    temp = tempArr.join('');
    return parseInt(temp);
};

console.log(maximum69Number(9669))