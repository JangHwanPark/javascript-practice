// Find a Corresponding Node of a Binary Tree in a Clone of That Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function getTargetCopyBFS(original, cloned, target) {
    let queue = [[original, cloned]];

    while (queue.length) {
        const next = [];

        for (let [oNode, cNode] of queue) {
            if (oNode === target) return cNode;
            if (oNode.left) next.push([oNode.left, cNode.left]);
            if (oNode.right) next.push([oNode.right, cNode.right]);
        }
        queue = next;
    }
}

let tree = [7, 4, 3, null, null, 6, 19], target = 3
getTargetCopyBFS()