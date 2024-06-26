// 876. Middle of the Linked List
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const middleNodeSolution = function(head) {
    let arr = [];
    let length = 0;

    while (head !== null) {
        arr.push(head);
        head = head.next;
        length++;
    }

    return arr.at(length / 2);
}

/**
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * 목록의 중간 노드는 노드 3
 */
let head = [1,2,3,4,5];
console.log(middleNode(head))

/**
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * 목록에는 값이 3과 4인 두 개의 중간 노드가 있으므로 두 번째 노드를 반환
 */
let head2 = [1,2,3,4,5,6]