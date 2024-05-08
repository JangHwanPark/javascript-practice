/**
 * 682. Baseball Game<br>
 * 정수 x - 새로운 점수를 기록<br>
 * + - 이전 두 점수의 합으로 새 점수를 기록<br>
 * D - 이전 점수의 두 배인 새 점수를 기록<br>
 * C - 이전 점수를 무효화하여 기록에서 제거
 */
const calPoints = function (operations) {
    const stack = [];

    for (let i = 0; i < operations.length; i++) {
        // 이전 점수를 무효화하여 기록에서 제거
        if (operations[i] === "C") stack.pop();

        // 이전 점수의 두 배인 새 점수를 기록
        else if (operations[i] === "D") stack.push(stack[stack.length - 1] * 2);

        // 새로운 점수를 기록
        else if (operations[i] === "+") stack.push(stack[stack.length - 1] + stack[stack.length - 2]);

        // 정수인 경우
        else stack.push(+operations[i]);
    }

    return stack.reduce((a, b) => a + b, 0);
}

const calPointsSolution = function (operations) {
    const stack = [];

    for (let i = 0; i < operations.length; i++) {
        let stackLength = stack.length;

        switch (operations[i]) {
            case "+":
                stack.push(stack[stackLength - 1] + stack[stackLength - 2]);
                break;
            case "D":
                stack.push(stack[stackLength - 1] * 2);
                break;
            case "C":
                stack.pop();
                break;
            default:
                stack.push(+operations[i]);
        }
    }

    return stack.reduce((now, prev) => now + prev, 0);
}

/**
 * input - ops1 = ["5", "2", "C", "D", "+"]<br>
 * output - 30<br>
 *
 * "5" - 레코드에 5를 추가합니다. 이제 레코드는 [5]입니다.<br>
 * "2" - 레코드에 2를 추가합니다. 이제 레코드는 [5, 2]입니다.<br>
 * "C" - 이전 점수를 무효화하고 제거합니다. 이제 기록은 [5]입니다.<br>
 * "D" - 레코드에 2 * 5 = 10을 추가합니다. 이제 레코드는 [5, 10]입니다.<br>
 * "+" - 레코드에 5 + 10 = 15를 추가합니다. 이제 레코드는 [5, 10, 15]입니다.<br>
 * 총 합은 5 + 10 + 15 = 30입니다.
 */
let ops1 = ["5", "2", "C", "D", "+"];
console.log(calPoints(ops1));
console.log(calPointsSolution(ops1));

let ops2 = ["5","-2","4","C","D","9","+","+"] // 27
console.log(calPoints(ops2));
console.log(calPointsSolution(ops2));

let ops3 = ["1","C"];
console.log(calPoints(ops3));
console.log(calPointsSolution(ops3));