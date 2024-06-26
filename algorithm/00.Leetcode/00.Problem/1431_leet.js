/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxVal = Math.max(...candies);
    let result = [];
    console.log(maxVal)

    for (let i = 0; i < candies.length; i++) {
        maxVal > candies[i] + extraCandies ? result.push(false) : result.push(true);
    }
    console.log(result)
    return result;
};

let candies = [2,3,5,1,3], extraCandies = 3;
kidsWithCandies(candies, extraCandies)