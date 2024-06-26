function Node(value, children) {
    this.value = value;
    this.children = children;
}

/*
 * let child1 = new Node(5, []);
 * let child2 = new Node(6, []);
 * let child3 = new Node(3, [child1, child2]);
 * let child4 = new Node(2, []);
 * let child5 = new Node(4, []);
 * let root = new Node(1, [child3, child4, child5]);
 */

function postorder(root) {
    let result = [];

    function traverse(node) {
        if (!node) return;
        node.children.forEach(currentValue => traverse(currentValue));
        result.push(node.value);
    }

    traverse(root);
    return result;
}

// Set Tree
let child1 = new Node(5, []);
let child2 = new Node(6, []);
let child3 = new Node(3, [child1, child2]);
let child4 = new Node(2, []);
let child5 = new Node(4, []);
let root = new Node(1, [child3, child4, child5]);

/*
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: [5,6,3,2,4,1]
 */
let root1 = [1,null,3,2,4,null,5,6];
console.log(postorder(root));
/*
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
 */
let root2 = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
console.log(postorder(root2));