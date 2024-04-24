// Get Element
const root = document.querySelector('#root');

// Create Element function
function createElementFn(tagName, parent, textContent = '', className = '') {
    const element = document.createElement(tagName);
    element.textContent = textContent;
    element.className = className
    parent.appendChild(element);
    return element;
}

// Create Elements
const container = createElementFn('main', root, '', 'container');
const wrap = createElementFn('div', container, '', 'inputWrap');
const input = createElementFn('input', wrap);
const button = createElementFn('button', wrap, '클릭');
const algorithm = createElementFn('div', container, '여기에 배열이 출력됩니다.', 'algorithm textCenter');
const inputValue = createElementFn('div', algorithm, '', 'inputValue fontSize-lg textCenter list');

// Business Logic
function addArrayElements(number) {
    const elements = [];
    for (let i = 0; i < number; i++) {
        const arrayElement = createElementFn('div', inputValue, `요소: ${i}`, 'elements');
        elements.push(arrayElement);
    }
    return elements;
}

// Event Listener
input.addEventListener('input', (e) => {    // DebugLog
    console.log(typeof +e.target.value);
})

button.addEventListener('click', () => {
    if (!isNaN(+input.value)) {
        createElementFn('div', wrap, `입력값: ${input.value}`, 'font-size: 1.25rem; textCenter');
        const elements = addArrayElements(+input.value);
        inputValue.innerHTML = elements.map(el => el.outerHTML).join('');
    } else alert('숫자만 입력가능합니다.');
    input.value = '';
})

// Todo: 배열 생성시 요소 위치 무작위로.
// Todo: 버튼 vs 마우스이벤트 고민중