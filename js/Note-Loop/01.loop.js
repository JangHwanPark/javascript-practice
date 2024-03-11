function loop(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function loopMinus(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

function beLoop(n) {
    for (let i = 0; i < n; ++i) {
        console.log(i);
    }
}


function beLoopMinus(n) {
    for (let i = n; i > 0; --i) {
        console.log(i);
    }
}

function nestedLoops(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j, "*");
        }
    }
}



//loop(10)
//loopMinus(10)
//beLoop(10)
//beLoopMinus(10)
nestedLoops(5);