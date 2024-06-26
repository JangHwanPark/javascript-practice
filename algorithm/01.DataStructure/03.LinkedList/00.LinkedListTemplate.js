/**
 * Linked List - Class 문법으로 구현
 *
 * JS 는 가비지컬렉터가 일하기때문에 C++처럼 delete 함수로
 * 메모리에서 제거하지 않아도 됨
 */

// List 의 Node 를 생성하는 클래스
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// 단일 연결 리스트를 생성하는 클래스
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // 마지막 요소에 노드 삽입 , 시간 복잡도: O(1)
    pushNode(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // 마지막 노드 제거 , 시간 복잡도: O(n)
    popNode() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // 첫번째 노드 삭제 , 시간 복잡도: O(1)
    shiftNode() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.length--;

        if (this.length === 0) this.tail = null;
        return currentHead;
    }

    // 첫번째 위치에 노드 삽입 , 시간 복잡도: O(1)
    unshiftNode(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // 요소(Node)의 위치(index)를 조회 , 시간 복잡도: O(n)
    getNode(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    // 리스트의 특정 위치에 있는 요소(Node)의 값을 수정 , 시간 복잡도: O(n)
    setNode(index, data) {
        let foundNode = this.getNode(index);
        if (foundNode) {
            foundNode.data = data;
            return true;
        }
        return false;
    }

    // 지정된 위치에 새로운 노드 삽입 , 시간 복잡도: O(n)
    insertNode(index, data) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.pushNode(data);
        if (index === 0) return !!this.unshiftNode(data);

        let newNode = new Node(data);
        let prev = this.getNode(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // 지정된 위치의 노드를 제거 , 시간 복잡도: O(n)
    removeNode(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shiftNode();
        if (index === this.length - 1) return this.popNode();

        let previousNode = this.getNode(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    // 링크드 리스트 뒤집기 , 시간 복잡도: O(n)
    reverseList() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node = next;
        }

        return this;
    }

    // 노드 순회
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// 인스턴스 생성
let list = new SinglyLinkedList();
list.pushNode(1);
list.pushNode(2);
list.pushNode(3);
list.pushNode(4);
list.pushNode(5);

// 생성된 리스트 출력
console.log(list);

// 리스트 출력
list.printList();