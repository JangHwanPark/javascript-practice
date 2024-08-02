class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node('1')
a.next = new Node('2')
a.next.next = new Node(3)
console.log(a)

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 삽입 메소드
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else { // 리스트가 비어있지 않은경우
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // 노드 삭제
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    // 리스트에 아무것도 없으면 undefined 반환
    // 리스트가 비어있는지 확인하려면 head 값이 null 인지
    // 길이가 0인지를 확인하면됨
    
    // next 가 존재하는한 계속 순회
    while (current.next) {
      //
      newTail = current;
      current = current.next;
    }
    //
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

let list = new SinglyLinkedList();
//console.log(list)
list.push("Hello")
//console.log(list)
list.push("Goodbye")
//console.log(list)
list.push(99)
console.log(list)
console.log(list.pop())
