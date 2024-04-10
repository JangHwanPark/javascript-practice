// Variable
const inputColor = '입력 색상: ';
const root = document.querySelector('#wrap');

// Create Element
const div = document.createElement('div');
const label = document.createElement('label');
const input = document.createElement('input');
const button = document.createElement('button');
const paragraph = document.createElement('p');

// Add Element
root.appendChild(div);
div.appendChild(label);
div.appendChild(input);
div.appendChild(button);

root.appendChild(paragraph);

// Element Design
div.id = 'input_wrap';
div.className = 'flex';

label.id = 'label';
label.htmlFor = 'input'; // for 예약어라 htmlFor 써야함
label.innerText = '색상을 입력하세요';

input.id = 'input';
input.type = 'text';
input.name = 'color';
input.placeholder = 'example: red or #333333';
input.autocomplete = 'off';

button.id = 'button';
button.innerText = '색 변경 하기';

paragraph.id = 'paragraph';
paragraph.innerText = inputColor;

// Event
input.addEventListener('input', (e) => {
    console.log('input: ', e.target.value)
})

button.addEventListener('click', () => {
    console.log('btn: ', input.value)
    paragraph.innerText = `${inputColor}${input.value}`;
})