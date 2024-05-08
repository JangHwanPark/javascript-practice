// Range-Sum-of-BST

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
    if (!root) return 0;
    const currentValue = (root.val >= low && root.val <= high) ? root.val : 0;
    const leftSum = rangeSumBST(root.left, low, high);
    const rightSum = rangeSumBST(root.right, low, high);

    return currentValue + leftSum + rightSum;
}

let root = [10, 5, 15, 3, 7, null, 18];
let low = 7, high = 15;
rangeSumBST(root, low, high)