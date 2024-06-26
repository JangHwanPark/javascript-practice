// Default SinglyLinkedList
function SinglyLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = null;
    this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function() {
    return this.size = 0
}

// 삽입
SinglyLinkedList.prototype.insert = function(value) {
    if (this.head === null) this.head = new SinglyLinkedListNode(value);
    else {
        let temp = this.head;
        this.head = new SinglyLinkedListNode(value);
        this.head.next = temp;
    }

    this.size++;
}

// 값에 의한 삭제
SinglyLinkedList.prototype.remove = function(value) {

}

// 헤드 삭제
SinglyLinkedList.prototype.deleteHead = function() {

}

// 검색
SinglyLinkedList.prototype.find = function(value) {

}

let sell1 = new SinglyLinkedList();
sell1.insert("data");
sell1.insert("data2");
sell1.insert("data3");
console.log(sell1)