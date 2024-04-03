const fs = require('fs');
const readline = require("readline");

const TEST_INPUT_TEXT = '../../data/inputFile.txt';
let userInput = readline.createInterface({
    input: TEST_INPUT_TEXT,
    output: TEST_INPUT_TEXT
})

oninput.on('line', function (line)  {
    console.log(line);
    userInput.close();
})

const fsInFile = () => {
    let data = [1];
    return `data: ${data}`;
}

console.log(fsInFile());