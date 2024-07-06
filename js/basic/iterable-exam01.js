const arr = ['iterator1', 'iterator2', 'iterator3', 'iterator4', 'iterator5']

for (const el of arr.entries()) {
  console.log(el)
}

console.log(arr[0])
console.log(...arr)
const [first, second, third, fourth, fifth] = arr;
console.log(first);  // iterator1
console.log(second); // iterator2
console.log(third);  // iterator3
console.log(fourth); // iterator4
console.log(fifth);  // iterator5

const obj = {
  name: 'name',
  price: 1000,
  description: "Product 1"
}

for (const el in obj) {
  console.log(el)
}

const arrObj = [
  {name: 'name1', price: 1000},
  {name: 'name2', price: 1000},
  {name: 'name3', price: 1000},
  {name: 'name4', price: 1000},
  {name: 'name5', price: 1000},
]

for (const el of arrObj) {
  console.log({...el})
}

const iterator = arrObj.values();
console.log(`iterator : ${iterator}`)
console.log(iterator.next().value)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next().done)

const multipleObject = {
  // Symbol.iterator 메서드를 구현하여 iterable 프로토콜 준수
  [Symbol.iterator]: function() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let index = 0;
    return {
      next() {
        // 배열의 인덱스 * 2
        // 반환
        // value : arr[i], done: arr.length - 1
        if (index < arr.length) {
          const value = arr[index] * 2;
          index++;
          return {value: value, done: false}
        } else {
          return {done: true}
        }
      }
    }
  }
}
console.log(Symbol.iterator in multipleObject)
console.log(multipleObject)
for (const el of multipleObject) {
  console.log(el)
}

// 새로운 이터레이터 객체 생성
const multipleObjectIterator = multipleObject[Symbol.iterator]();
console.log(multipleObjectIterator.next())

// 일반 객체의 스프레드 문법 사용이 가능하다.
// 이터러블하지 않으면 디스트럭처링 문법사용이 불가하다.
const obj2 = {
  name: 'name',
  age: '20',
}

console.log({...obj2})