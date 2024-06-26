/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
const timeRequiredToBuy = function(tickets, k) {
    let time = 0;

    for (let i = 0; i < tickets.length; i++) {
        // k번째 사람과 그 앞에 있는 사람들의 경우
        if(i <= k) time += Math.min(tickets[k], tickets[i]);
        
        // k번째 사람 뒤에 있는 사람들의 경우
        else time += Math.min(tickets[k] - 1, tickets[i]);
    }
    
    return time;
};

const timeRequiredToBuySolution = function(tickets, k) {
    let time_solution = 0;
    for (let index in tickets) {
        let benchmark_solution = index > k ? tickets[k] - 1 : tickets[k];

        if (tickets[index] >= benchmark_solution) time_solution += benchmark_solution;
        else time_solution += tickets[index];
    }

    return time_solution;
};

// Example 1
let tickets1 = [2,3,2], k1 = 2;
console.log(timeRequiredToBuy(tickets1, k1))

// Example 2
let tickets2 = [5,1,1,1], k2 = 0;