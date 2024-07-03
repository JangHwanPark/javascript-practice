// 배열 리터럴
let arrayLiteral = [1, 2, 3];
console.log(arrayLiteral, arrayLiteral.length)

let arrayLiteral2 = [];
console.log(arrayLiteral2, arrayLiteral2.length)

let arrayLiteral3 = [1, ,3];  // 희소배열 생성
console.log(arrayLiteral3, arrayLiteral3.length)


// new 연산자를 이용한 Array 객체 생성
const arrayObject = new Array(5);
console.log(arrayObject, arrayObject.length)
console.log(Object.getOwnPropertyDescriptors(arrayObject))


// Array.of (인수를 요소로 받아 생성)
const arrayOf = Array.of('Hello', "Array", "JavaScript");
console.log(arrayOf)
console.log(Object.getOwnPropertyDescriptors(arrayOf))
console.log(arrayOf.join(''))

// Array.from
// 유사배열 객체를 배열로 변환
const arrayFormObject = Array.from({length: 2, 0: 'a', 1: 'b'})
console.log(arrayFormObject)

// 이터러블 객체를 인수로 받음
const arrayFormIterable = Array.from("Hello JS")
console.log(arrayFormIterable)