// Arrays in JavaScript
let programmingLanguage = ['C', 'C++', 'C#', 'Java', 'JavaScript', 'Python', 'Ruby', 'R', 'Swift', 'Kotlin'];

// 배열 리터럴을 사용한 빈 배열 초기화
let arr = [];

// Array 객체를 사용한 빈 배열 초기화
let arr2 = new Array();

// Array 객체를 사용한 길이가 5인 배열 초기화
let arr3 = new Array(5).fill(0);

// Array.prototype;

// 읽기 (상수시간)
console.log(programmingLanguage[0]);
console.log(programmingLanguage[1]);
console.log(programmingLanguage[2]);
console.log(programmingLanguage[3]);
console.log(programmingLanguage[4]);
console.log(arr[0]); // undefined (범위를 벗어나거나 값이 없으면)
console.log(programmingLanguage[10]);

// 검색
console.log(programmingLanguage.indexOf('C#'));

// 삽입
arr.push(1);

// 삭제
arr.pop(); // 배열의 마지막 요소 제거
programmingLanguage.unshift(); // 배열의 첫 번째 요소 제거
programmingLanguage.splice(1, 2); // 인덱스 n에서 n개의 요소 삭제
console.log(programmingLanguage)