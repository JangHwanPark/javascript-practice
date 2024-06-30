import {InputField} from "./InputField.js";

const APP = document.querySelector('.app');

// 추가
const INPUT_FIELD = new InputField('추가');
INPUT_FIELD.render(APP);

// 검색
const SEARCH_FIELD = new InputField('검색');
SEARCH_FIELD.render(APP)

const TITLE_CONTAINER = document.createElement('div');
APP.appendChild(TITLE_CONTAINER)

const TITLE = document.createElement('h2');
TITLE.textContent = "연락처 목록"
TITLE_CONTAINER.appendChild(TITLE)

INPUT_FIELD.button.addEventListener('click', () => {
  const contactName = +INPUT_FIELD.input.value;
  if (contactName !== String(contactName)) {
    alert("전화번호는 숫자만 입력할 수 있습니다.")
  }
  
  if (contactName) {
    const newInputEl = document.createElement('div');
    newInputEl.className = "contact-list";
    newInputEl.textContent = `010-${contactName}`;
    TITLE_CONTAINER.insertAdjacentElement("beforeend", newInputEl);
    INPUT_FIELD.input.value = '';
  }

  if (!contactName) {
    const errorInputEl = document.createElement('div');
    errorInputEl.className = "error";
    errorInputEl.textContent = '값이 없습니다.';
    TITLE_CONTAINER.insertAdjacentElement("beforeend", errorInputEl);
  }
});

SEARCH_FIELD.button.addEventListener('click', () => {
  console.log("test")
})