function removeStarts(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        s[i] !== '*' ? stack.push(s[i]) : stack.pop();
    }

    return stack.join('');
}

let s = "leet**cod*e"
removeStarts(s);