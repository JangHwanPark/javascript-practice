function solution(s) {
    const str = s.toLowerCase();
    let cntP = 0;
    let cntY = 0;
    for (let i = 0; i < str.length; i++)
    {
        if (str[i] === "p") cntP++;
        if (str[i] === "y") cntY++;
    }
    console.log(cntP, cntY)
    return cntP === cntY ? true : false;
}

console.log(solution("pPoooyY"))
console.log(solution("Pyy"))