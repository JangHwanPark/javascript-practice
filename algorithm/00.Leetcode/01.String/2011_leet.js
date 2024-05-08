function finalValueAfterOperations(operations) {
    let X = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "X++") X++;
        else if (operations[i] === "++X") ++X;
        else if (operations[i] === "X--") X--;
        else if (operations[i] === "--X") --X;
    }
    return X;
}

function finalValueAfterOperationsSwitchCase(operations) {
    let num = 0;
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "X++":
                num++;
                break;
            case "++X":
                ++num;
                break;
            case "X--":
                num--;
                break;
            case "--X":
                --num;
                break;
            default:
                break;
        }
    }

    return num;
}

let operations1 = ["--X","X++","X++"];
let operations2 = ["++X","++X","X++"];
let operations3 = ["X++","++X","--X","X--"];
console.log(finalValueAfterOperations(operations1));
console.log(finalValueAfterOperations(operations2));
console.log(finalValueAfterOperations(operations3));