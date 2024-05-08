/**
 * ES5 방식 트리 구현
 * val: 노드의 값, 기본값은 0
 * left: 왼쪽 자식 노드에 대한 참조, 기본값은 null
 * right: 오른쪽 자식 노드에 대한 참조, 기본값은 null
 */
function TreeNodeEs5(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/** ES6 방식 트리 구현
 * constructor: 클래스의 생성자 함수, 새로운 인스턴스를 생성할 때 호출됨
 * val: 노드의 값, 기본값은 0
 * left: 왼쪽 자식 노드에 대한 참조, 기본값은 null
 * right: 오른쪽 자식 노드에 대한 참조, 기본값은 null
 */
class TreeNodeEs6 {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Binary Tree Right Side View
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
    // root가 없다면 빈 배열 반환
    if (!root) return [];

    /* result : 최종 결과를 저장할 배열
     * queue : BFS를 위한 큐, Root 노드로 시작 */
    const result = [];
    const queue = [root];

    /* 큐가 비어있지 않은 동안 루프 반복
     * 1. levelSize : 현재 레벨의 노드 수
     * 2. node : 큐에서 노드를 한개 꺼냄
     * 3. 현재 레벨의 마지막 노드면 result배열에 추가
     * 4. 꺼낸 노드의 왼쪽 자식이 있으면 큐에 추가
     * 5. 꺼낸 노드의 오른쪽 자식이 있으면 큐에 추가 */
    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (i === levelSize - 1) {
                result.push(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    // 모든 레벨을 순회하고 결과 반환
    return result;
}

// [1,3,4]
let root = new TreeNodeEs6(1);
root.left = new TreeNodeEs6(2);
root.right = new TreeNodeEs6(3);
root.left.right = new TreeNodeEs6(5);
root.right.right = new TreeNodeEs6(4);
console.log(rightSideView(root));