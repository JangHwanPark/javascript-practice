/**
 * 셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션입니다. 셋에 키가 없는 값이 저장됩니다.
 *
 * new Set(iterable) – 셋을 만듭니다. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.<br>
 * set.add(value) – 값을 추가하고 셋 자신을 반환합니다.<br>
 * set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.<br>
 * set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.<br>
 * set.clear() – 셋을 비웁니다.<br>
 * set.size – 셋에 몇 개의 값이 있는지 세줍니다.
 */
let set = new Set();

let john = { name : "John" };
let pete = { name : "Pete" };
let mary = { name : "Mery" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.size);
for (let user of set) console.log(user.name);