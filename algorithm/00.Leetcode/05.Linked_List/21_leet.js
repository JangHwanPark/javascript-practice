function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function mergeTwoLists(list1, list2) {
    // 링크드 리스트의 헤드를 가리키는 더미노드 생성
    let dummyNode = new ListNode(0, null);
    let current = dummyNode;

    // list1과 list2를 모두 순회할때까지 반복
    while (list1 !== null && list2 !== null) {

        /*
         * list1의 값이 list2의 값보다 작거나 같으면
         * list1의 노드를 새 링크드 리스트에 추가하고
         * list1을 다음 노드로 이동한다.
         */
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {

            /*
             * list2의 노드를 새 링크드 리스트에 추가하고
             * list2를 다음 노드로 이동한다.
             */
            current.next = list2;
            list2 = list2.next;
        }

        // 새 리스트의 현재 노드를 다음으로 이동한다.
        current = current.next;
    }

    /*
     * list1이나 list2중 하나가 먼저 끝난경우,
     * 나머지 리스트를 새 링크드리스트에 연경한다.
     */
    if (list1 != null) current.next = list1;
    else if (list2 != null) current.next = list2;

    // 더미노드의 다음 노드를 반환하여 실제 병합된 리스트의 헤드를 반환한다.
    return dummyNode.next;
}

function recursionMergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1.val < list2.val) {
        list1.next = recursionMergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = recursionMergeTwoLists(list1, list2.next);
        return list2;
    }
}

// 배열을 연결 리스트로 변환하는 함수
function arrayToList(array) {
    let head = new ListNode(0);
    let current = head;
    array.forEach(val => {
        current.next = new ListNode(val);
        current = current.next;
    });
    return head.next;
}

// 연결 리스트를 배열로 변환하는 함수
function listToArray(list) {
    let array = [];
    while (list !== null) {
        array.push(list.val);
        list = list.next;
    }
    return array;
}

// 배열을 연결 리스트로 변환하여 첫 번째 병합 함수 사용
let list1 = arrayToList([1,2,4]);
let list2 = arrayToList([1,3,4]);
let mergedList = mergeTwoLists(list1, list2);
console.log(listToArray(mergedList)); // 첫 번째 병합 결과 출력

// 다시 리스트를 생성하여 두 번째 병합 함수 사용
let list1_new = arrayToList([1,2,4]);
let list2_new = arrayToList([1,3,4]);
let mergedListRecursive = recursionMergeTwoLists(list1_new, list2_new);
console.log(listToArray(mergedListRecursive)); // 두 번째 병합 결과 출력