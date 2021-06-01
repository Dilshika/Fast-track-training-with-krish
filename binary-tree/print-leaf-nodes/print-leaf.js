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

         if (currentNode === null) {
             this.root = new Node(data);
         } else {
             const search = function(node) {
                 if (data < node.data) {
                     if (node.left === null) {
                         node.left = new Node(data);
                     } else {
                         return search(node.left);
                     }
                 } else if (data > node.data) {
                     if (node.right === null) {
                         node.right = new Node(data);
                     } else {
                         return search(node.right);

                     }
                 } else {
                     return null;
                 }

             };
             return search(currentNode);
         }
     }

     //post-order traversal left-->right-->root
     printLeaf() {
         let result = [];
         let currentNode = this.root;
         //to push values
         const traversal = (node) => {
             //if left child exists,go left again
             if (node.left) {
                 traversal(node.left);
                 if (node.left.left === null && node.left.right === null) {
                     result.push(node.left.data);
                 }
             }
             //if right child exists,go right again
             if (node.right) {
                 traversal(node.right);
                 if (node.right.left === null && node.right.right === null) {
                     result.push(node.right.data);
                 }
             }
         }

         traversal(currentNode);
         return result;
     }


 }

 module.exports = { BinaryTree }