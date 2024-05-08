function interpret(command) {
    const ans = [];
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') ans.push(command[i]);
        if (command[i] === '(' && command[i + 1] === ')') ans.push('o');
        if (command[i] === '(' && command[i + 1] === 'a') ans.push('al');
    }
    return ans.join('');
}

function interpretSolution(command) {
    let parsedCommand = "";

    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') parsedCommand = parsedCommand + 'G';
        else if (command[i] === '(' && command[i + 1] === ')') {
            i = i + 1;
            parsedCommand = parsedCommand + 'o';
        } else {
            i = i + 3;
            parsedCommand = parsedCommand + 'al';
        }
    }

    return parsedCommand;
}

function interpretSolutionFn(command) {
    return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
}

function interpretSolutionFn2(command) {
    command = command.replaceAll('(al)', 'al');
    command = command.replaceAll('()', 'o');
    return command;
}

let command = "G()(al)";
let command2 = "G()()()()(al)";
let command3 = "(al)G(al)()()G";

console.log(interpret(command));
console.log(interpret(command2));
console.log(interpret(command3));

console.log(interpretSolutionFn(command));
console.log(interpretSolutionFn(command2));
console.log(interpretSolutionFn(command3));

console.log(interpretSolution(command));
console.log(interpretSolution(command2));
console.log(interpretSolution(command3));