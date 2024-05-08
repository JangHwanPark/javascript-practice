// Reverse Linked List
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        prev = new ListNode(current.val, prev);
        current = current.next;
    }
    return prev;
}
