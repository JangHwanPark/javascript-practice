const arr = ['너덜트', '코딩하는거니', '보따', '돌비공포라디오', '심야괴담회', '보물섬'];
const enArr = ['google', 'kakao', 'youtube', 'meta', 'github', 'microsoft']

// 코딩하는 거니를 찾아서 "코 딩 하 는 거 니"로 출력
const lab1 = arr.find(user => user === '코딩하는거니').split('')
console.log(lab1)

// 배열에서 보따를 찾아 공백으로 분리된 형태로 출력
const lab2 = arr.find(item => item === '보따').split('').join(' ');
console.log(lab2)

// 배열에서 모든 문자열을 대문자로 변환하여 새로운 배열로 출력
const lab3 = enArr.map(item => item.toUpperCase())
console.log(lab3)

// 배열에서 길이가 3자 이하인 문자열을 모두 찾아서 출력
const lab4 = arr.filter(item => item.length <= 3);
console.log(lab4)

// 배열에서 문자열 중 '보'로 시작하는 문자열을 찾아서 각 문자열의 마지막 글자를 제거하고 출력
const lab5 = arr.filter(item => item.includes('보')).map(item => item.slice(0, -1))
console.log(lab5)

// 배열에서 모든 문자열을 역순으로 변환하여 출력
const lab6 = arr.reverse();
console.log(lab6)