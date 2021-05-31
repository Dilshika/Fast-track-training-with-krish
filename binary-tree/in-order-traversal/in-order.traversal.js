class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

module.exports = class BinaryTree {
    constructor() {
        this.root = null;
        //to take a count of nodes
        this.count = 0;
    }


    insert(data) {
        let currentNode = this.root;
        this.count++;

        //if root node doesn't exists
        if (currentNode === null) {
            this.root = new Node(data);
            // console.log(this.root);
            return this.root;
        } else {
            //Search index to insert the data
            const searchIndex = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return node.left;
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



    //in-order traversal left-->root-->right
    preOrder() {
        let result = [];
        let currentNode = this.root;
        //to push values
        const traversal = (node) => {
            //if left child exists,go left again
            if (node.left) { traversal(node.left); }
            //print root node value
            result.push(node.data);
            //if right child exists,go right again
            if (node.right) { traversal(node.right); }
        }

        traversal(currentNode);
        return result;
    }

    //breadth-first search -to check tree
    breadthFirst() {
        let result = [];
        let queue = [];
        queue.push(this.root);

        while (queue.length) {
            let currentNode = queue.shift();
            result.push(currentNode);

            //if queue has a left child push it to queue
            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            //if queue has a right child push it to queue
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return result;
    }

}