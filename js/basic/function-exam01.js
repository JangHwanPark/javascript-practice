const CurrentDispatcher = {
    current: null
}

// Dispatcher 초기화 함수
function initializeDispatcher() {
    CurrentDispatcher.current = {
        exam02: function(initialState) {
            console.log("exam02 메서드 호출됨");
            return `exam02 결과: ${initialState}`;
        }
    };
}

function exam01() {
    const dispatcher = CurrentDispatcher.current;
    if (dispatcher === null) {
        console.error("값이 널값임");
    }
    return dispatcher;
}

function exam02(initialState) {
    const dispatcher = exam01();
    return dispatcher.exam02(initialState);
}

console.log(exam01())
console.log(exam02(3))