import {InputField} from "./InputField.js";

const APP = document.querySelector('.app');

// 추가
const INPUT_FIELD = new InputField('추가');
INPUT_FIELD.render(APP);

// 제목 컨테이너
const TITLE_CONTAINER = document.createElement('div');
APP.appendChild(TITLE_CONTAINER)

// 제목
const TITLE = document.createElement('h2');
TITLE.textContent = "연락처 목록"
TITLE_CONTAINER.appendChild(TITLE)

// 검색
const SEARCH_FIELD = new InputField('검색');
SEARCH_FIELD.render(TITLE_CONTAINER)

// 연락처 불러오기
const getContacts = () => {
  const contacts = localStorage.getItem('contacts');
  return contacts ? JSON.parse(contacts) : [];
}

// 연락처 저장
const saveContacts = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// 연락처 렌더링
const renderContacts = (contacts) => {
  TITLE_CONTAINER.innerHTML = ''; // 기존 연락처 목록 삭제
  TITLE_CONTAINER.appendChild(TITLE); // 제목 추가
  TITLE_CONTAINER.appendChild(SEARCH_FIELD.div); // 검색 필드 추가
  contacts.forEach(contact => {
    const contactEl = document.createElement('div');
    contactEl.className = "contact-list";
    contactEl.textContent = contact;
    TITLE_CONTAINER.appendChild(contactEl);
  });
};

// 초기 렌더링
renderContacts(getContacts());

const handleAddContact = (key, value) => {
  const contactName = INPUT_FIELD.input.value;
  if (!/^\d+$/.test(contactName)) {
    alert("전화번호는 숫자만 입력할 수 있습니다.");
    return;
  }

  if (contactName.length !== 8) {
    alert("전화번호는 8자리여야 합니다.");
    return;
  }

  if (contactName) {
    // 문자열 분리
    const contactMidNumber = contactName.substring(0, 4);
    const contactLastNumber = contactName.substring(4, 8);
    
    // 로컬스토리지 추가
    const contacts = getContacts();
    const newContact = `010-${contactMidNumber}-${contactLastNumber}`;
    contacts.push(newContact);
    saveContacts(contacts);
    
    // 요소 추가
    const newInputEl = document.createElement('div');
    newInputEl.className = "contact-list";
    newInputEl.textContent = `010-${contactMidNumber}-${contactLastNumber}`;
    TITLE_CONTAINER.insertAdjacentElement("beforeend", newInputEl);
    INPUT_FIELD.input.value = '';
    alert("저장됨")
  }

  if (!contactName) {
    const errorInputEl = document.createElement('div');
    errorInputEl.className = "error";
    errorInputEl.textContent = '값이 없습니다.';
    TITLE_CONTAINER.insertAdjacentElement("beforeend", errorInputEl);
  }
}

const handleSearchContact = () => {
  const SEARCH_VALUE = SEARCH_FIELD.input.value;
  console.log(SEARCH_VALUE)
  
  // 로컬스토리지에서 검색
}

// once: true - 이벤트 리스너를 한번만 실행하고 제거
INPUT_FIELD.button.addEventListener('click', handleAddContact/*, {once: true}*/);
SEARCH_FIELD.button.addEventListener('click', handleSearchContact/*, {once: true}*/)