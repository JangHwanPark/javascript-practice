class Tree {
    constructor(val) {
        this.val = val;
        this.leftNode = null;
        this.rightNode = null;
    }

    setVal(val) {
        this.val = val;
    }

    setLeft(node) {
        this.leftNode = node;
    }

    setRight(node) {
        this.rightNode = node;
    }
}