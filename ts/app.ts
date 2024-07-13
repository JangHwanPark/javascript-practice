function add(n1: number, n2: number) {
  return n1 + n2;
}

const num1 = 5;
const num2 = 2.8;
const res = add(num1, num2);
console.log(res)
console.log(typeof res)

// 사용자 지정 오류 만들기
/*function addErr(n1: number, n2: number) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error("타입 안맞음요")
  }
  return n1 + n2;
}

const num3 = "5";
const num4 = 2.8;
const res1 = addErr(num3, num4);
console.log(res1)
console.log(typeof res1)*/

// 타입 케이스?
// 타입스크립트에서는 항상 string 또는 number 와 같은 타입을 다룸
// string, number 등이 아니라 String, Number 등이다.
// TS 의 주요 원시 타입은 모두 소문자다

function addBool(n1: boolean, n2: boolean) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error("타입 안맞음요")
  // }
  return n1 + n2;
}

const bool1 = true;
const bool2 = false;
const res2 = addBool(bool1, bool2);
console.log(res2)
console.log(typeof res2)
