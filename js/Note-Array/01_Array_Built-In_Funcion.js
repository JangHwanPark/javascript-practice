/**
 * Built-in Function
 * 프로그래밍에서 제공하는 내장함수 (프로그래밍 언어의 표준 라이브러리의 일부로 재공되고,
 * 개발자가 별도로 정의(만들지 않고)하지 않고 바로 사용할 수 있다.
 */
const users = [
    { id: 1, name: "Alice", age: 28, isActive: true },
    { id: 2, name: "Bob", age: 23, isActive: false },
    { id: 3, name: "Charlie", age: 30, isActive: true },
    { id: 4, name: "David", age: 22, isActive: false },
    { id: 5, name: "Eve", age: 35, isActive: true },
];

// map() - 배열의 요소를 순회하고 새로운 배열을 반환한다.
const builtInMap = users.map((item, index, array) => {
    return `builtInMap: ${JSON.stringify(item)}`
})
console.log(builtInMap)

// filter() - 조건에 해당하는 배열을 반환한다.
const builtInFilter = users.filter((item) => {
    return item.name === "Alice"
})
console.log(builtInFilter)

// reduce() -

// forEach() -

// find() -

// findIndex() -

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