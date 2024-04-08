function call(x) {
    console.log(x);
    call2("Call2 호출");
}

function call2(x) {
    console.log(x);
}

function asy(s) {
    setTimeout(() => {
        console.log("setTimeout: ", s)
    }, s * 1000)
}

function call3(callback) {
    console.log("콜백 실행")
    callback(1)
    console.log("Call3 함수 끝")
}

// Sync
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log("")

// Async
console.log(1)
call("call 호출")
console.log(2)
console.log(3)
asy(3);
console.log(4)
call3(asy)
console.log(5)