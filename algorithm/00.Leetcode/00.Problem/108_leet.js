function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    function constructBST(start, end) {
        if (start > end) return null;

        let mid = Math.floor((start + end) / 2);
        let root = new TreeNode(nums[mid]);

        root.left = constructBST(start, mid - 1);
        root.right = constructBST(mid + 1, end);
        return root;
    }

    return constructBST(0, nums.length - 1);
}

let nums = [-10,-3,0,5,9]
sortedArrayToBST(nums)