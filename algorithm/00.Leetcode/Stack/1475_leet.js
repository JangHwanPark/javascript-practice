function finalPrices(prices) {
    let answer = [];

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                prices[i] = prices[i] - prices[j];
                break;
            }
        }
        answer.push(prices[i]);
    }

    return answer;
}

function solutionFinalPrices(prices) {
    let pricesLen = prices.length;
    let answer = [];

    for (let i = 0; i < pricesLen; i++) {
        let newValue = prices[i];

        for (let j = i + 1; j < pricesLen; j++) {
            if (prices[j] <= prices[i]) {
                newValue = prices[i] - prices[j];
                break;
            }
        }

        answer.push(newValue);
    }

    return answer;
}

/*
 * Input: prices = [8,4,6,2,3]
 * Output: [4,2,4,2,3]
 */
let prices = [8,4,6,2,3];
console.log(finalPrices(prices));
/*
 * Input: prices2 = [1,2,3,4,5]
 * Output: [1,2,3,4,5]
 */
let prices2 = [1,2,3,4,5];
console.log(finalPrices(prices2));
/*
 * Input: prices3 = [10,1,1,6]
 * Output: [9,0,1,6]
 */
let prices3 = [1,2,3,4,5];
console.log(finalPrices(prices3));