/**
 * Built-in Function
 * 프로그래밍에서 제공하는 내장함수 (프로그래밍 언어의 표준 라이브러리의 일부로 재공되고,
 * 개발자가 별도로 정의(만들지 않고)하지 않고 바로 사용할 수 있다.
 */
const users = [
  {id: 1, name: "Alice", age: 28, isActive: true},
  {id: 2, name: "Bob", age: 23, isActive: false},
  {id: 3, name: "Charlie", age: 30, isActive: true},
  {id: 4, name: "David", age: 22, isActive: false},
  {id: 5, name: "Eve", age: 35, isActive: true},
];

const products = [
  {name: 'Apple', price: 10},
  {name: 'Banana', price: 5},
  {name: 'Orange', price: 8},
];

// map() - 배열의 요소를 순회하고 새로운 배열을 반환한다.
const builtInMap = users.map((item, index, array) => {
  return `builtInMap: ${JSON.stringify(item)}`
})


// filter() - 조건에 해당하는 배열을 반환한다.
const builtInFilter = users.filter((item) => {
  return item.name === "Alice"
})


// reduce() -  메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer = 인자로 준 콜백함수)
// 함수를 실행하고, 하나의 결과값을 반환합니다.
const initialValue = 0;
const builtInReduce = users.reduce((
  accumulator,
  currentValue
) => {
  console.log("Reduce")
  console.log(accumulator + currentValue.id)
  return accumulator + currentValue.id;
}, initialValue)

const builtInReduceString = products.reduce((
  accumulator,
  currentValue
) => {
  console.log("accumulator: " + JSON.stringify(accumulator))
  return accumulator + currentValue.name;
})


// forEach() - 배열을 순회하며 반환값이 없다.
users.forEach(item => {
  console.log(item)
})

// forEach for 문으로 구현
let regularCustomer = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].id === 3) {
    regularCustomer.push(users[i])
  }
}

users.forEach(item => {
  if (item.id === 5) {
    regularCustomer.push(item)
  }
})

console.log(regularCustomer)

// find() - 요소를 순회하여 콜백함수의 조건이 참인 첫번째 요소를 반환
let search = "David"
const findUser = users.find((user) => user.name === search)
console.log(findUser)

users.find((user) => {
  if (user.name === "Bob") {
    console.log("나는 밥이야")
  } 
})

// findIndex() - 요소를 순회하여 콜백함수를 호출하고 조건이 참인 첫번째 요소를 반환한다.
const findUserId = users.findIndex((user) => user.id === 3)
console.log(findUserId)

const findUserNameIndex = users.findIndex((user) => user.name === search);
console.log(findUserNameIndex)

// every() -

// some() -

// sort() -

// slice() -

// concat() -

// join() -

// indexOf() -

// lastIndexOf() -

// includes() -

// flat() -

// flatMap() -