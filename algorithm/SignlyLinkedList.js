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
}

let list = new SinglyLinkedList();
console.log(list)
list.push("Hello")
console.log(list)
list.push("Goodbye")
console.log(list)
list.push(99)
console.log(list)
