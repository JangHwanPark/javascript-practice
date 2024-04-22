// Variable
const userInputColor = '입력 색상';
const root = document.querySelector('#wrap');

// Create Element
const div = document.createElement('div');
const label = document.createElement('label');
const input = document.createElement('input');
const button = document.createElement('button');
const showInputColorCode = document.createElement('p');
const showBackgroundColor = document.createElement('p');

// Add Element
root.appendChild(div);
div.appendChild(label);
div.appendChild(input);
div.appendChild(button);

root.appendChild(showInputColorCode);
root.appendChild(showBackgroundColor);

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

// paragraph, p태그
showInputColorCode.id = 'paragraph';
showInputColorCode.innerText = '색상 코드를 입력하세요';

// showBackgroundColor, p태그
showBackgroundColor.innerText = '입력한 색상이 출력됩니다.'
showBackgroundColor.style.width = '300px';
showBackgroundColor.style.margin = '0 auto';
showBackgroundColor.style.textAlign = 'center';

// Event
button.addEventListener('click', () => {
    // 입력받은 색상 코드로 변경, 빈칸 제출시 경고 메세지 출력
    if (input.value !== '') showInputColorCode.innerText = `${input.value}`;         
    else showInputColorCode.innerText = '색상 코드를 입력하세요!!'

    // 입력받은 색상으로 변경하기
    showBackgroundColor.style.backgroundColor = input.value;
})