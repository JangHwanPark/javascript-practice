const btn = document.querySelector('#search-btn');
const input = document.querySelector('#search-input');
const input_log = document.querySelector('#input-log');
const btn_log = document.querySelector('#btn-log');
const inner_log = document.querySelector('#inner-log');
let inner;

// addEventListener(E-type, CallBack-Fn(listener), options or useCapture);
// e.target.value : 이벤트가 발생한 태그의 값(value)속성 참조시 (실시간 변경)
input.addEventListener('input', function (e) {
    console.log("input 이벤트 실행: ", e.target.value);
    input_log.textContent = e.target.value;

    // 스코프 종료해도 test 변수에 값이 저장되어 있음
    inner = e.target.value;
    console.log("test: ", inner);
})

// input 변수에 저장된 값 클릭시 html 에 랜더링
btn.addEventListener('click', function () { // searchInput
    console.log("클릭 이벤트 실행: ", input.value);
    console.log("test 실행: ", inner); // 정상 출력
    console.log("test.value 실행: ", inner.value); // undefined
    btn_log.innerHTML = input.value;
    inner_log.innerHTML = inner.value;
})

// setTimeout(() => {
//     console.log("input 에 저장된 값: ", input.value);
//     console.log("test 에 저장된 값: ", test.value);
// }, 5000);