const solution = (n, c) => {
    for (let i = 0; i < c.length; i++) {
        if (c[i] === "w") n++;
        if (c[i] === "s") n--;
        if (c[i] === "d") n += 10;
        if (c[i] === "a") n -= 10;
    }
    return n;
}

console.log(solution(0, "wsdawsdassw"	))

// solution
const operations = {
    w: (n) => n + 1,
    s: (n) => n - 1,
    d: (n) => n + 10,
    a: (n) => n - 10,
}

const solution2 = (n, control) => {
    return [...control].reduce((prev, op) => operations[op](prev), n)
}

console.log(solution2(0, "wsdawsdassw"))