// import { TreeNode } from '../../createTree';
const TreeNode = require('../../createTree');

// Increasing Order Search Tree
function increasingBST(root) {
    let dummyNode = new TreeNode();
    let prev = dummyNode;

    function traverse(node) {
        if (!node) return;
        traverse(node.left);

        node.left = null;
        prev.right = node;
        prev = node;

        traverse(node.right);
    }

    traverse(root);
    return dummyNode.right;
}

let root = [5,3,6,2,4,null,8,1,null,null,null,7,9];
console.log(increasingBST(root));