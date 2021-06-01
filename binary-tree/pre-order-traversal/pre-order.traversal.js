class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let currentNode = this.root;
        //if root node doesn't exists
        if (currentNode === null) {
            this.root = new Node(data);
            return this.root;
        } else {
            //Search index to insert the data
            const searchIndex = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else {
                        return searchIndex(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else {
                        return searchIndex(node.right);

                    }
                } else {
                    return null;
                }
            }
            return searchIndex(currentNode);
        }
    }



    //pre-order traversal root-->left-->right
    preOrder() {
        let result = [];
        let currentNode = this.root;
        //to push values
        const traversal = (node) => {
            //print root node value
            result.push(node.data);
            //if left child exists,go left again
            if (node.left) { traversal(node.left); }
            //if right child exists,go right again
            if (node.right) { traversal(node.right); }
        }

        traversal(currentNode);
        return result;
    }

}

module.exports = { BinaryTree }