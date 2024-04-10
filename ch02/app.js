const root = document.querySelector('#wrap');

// Create Element
const div = document.createElement('div');
const label = document.createElement('label');
const input = document.createElement('input');
const button = document.createElement('button');

// Add Element
root.appendChild(div);
div.appendChild(label);
div.appendChild(input);
div.appendChild(button);

// Element Design
div.id = 'input_wrap';
div.className = 'flex';

label.id = 'label';
label.htmlFor = 'input'; // for 예약어라 htmlFor 써야함
label.innerText = '색상을 입력하세요';

input.id = 'input';
input.type = 'text';
input.name = 'color';

button.id = 'button';
button.innerText = '색 변경 하기';