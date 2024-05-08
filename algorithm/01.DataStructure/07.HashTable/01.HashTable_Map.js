// Map 객체를 사용한 해시테일 기본 구현 예제
class HashTable {
    constructor() {
        this.table = new Map();
    }

    /**
     * 해시 테이블에 Key - Value 쌍을 삽입.
     * @param {any} key 삽입할 키
     * @param {any} value 삽입할 값
     */
    setItem(key, value) {
        this.table.set(key, value);
    }

    /**
     * 주어진 키에 해당하는 값을 검색.
     * @param {any} key 검색할 키
     * @param {any} 키에 해당하는값.
     * 키가 존재하지 않는다면 undefined 반환
     */
    getItem(key) {
        return this.table.get(key);
    }

    /**
     * 주어진 키에 해당하는 항목을 해시 테이블에서 삭제합니다.
     * @param {any} key 삭제할 키
     */
    removeItem(key) {
        this.table.delete(key);
    }
}

module.exports = HashTable;