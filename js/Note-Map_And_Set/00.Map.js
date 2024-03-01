/**
 * `Map`은 키가 있는 데이터를 저장한다는 점에서 객체와 유사지만,<br>
 * 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있습니다.<br>
 *
 * `Map`의 주요 프로퍼티(속성)<br>
 * `new Map()` – 맵 객체 생성<br>
 * `map.set(key, value)` – key를 이용해 value를 저장<br>
 * `map.get(key)` – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환<br>
 * `map.has(key)` – key가 존재하면 true, 존재하지 않으면 false를 반환<br>
 * `map.delete(key)` – key에 해당하는 값을 삭제<br>
 * `map.clear()` – 맵 안의 모든 요소를 제거<br>
 * `map.size` – 요소의 개수를 반환
 */
let map = new Map();

/**
 * `key`를 이용해 `value`를 저장<br>
 * `Map`은 문자형 키, 숫자형 키, 부울린형 키를 저장할 수 있음
 */
map.set('stringKey', 'stringValue');
map.set('1', 'stringValue1');
map.set(1, 'numberValue');
map.set(true, 'booleanValue');

/**
 * 객체는 키를 문자형으로 변환한다.<br>
 * `Map`은 키의 타입을 변환시키지 않고 그대로 유지한다.
 */
console.log(map.get('stringKey'));
console.log(map.get('1'));
console.log(map.get(1));
console.log(map.get(true));
console.log('map.size : ', map.size);