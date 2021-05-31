const express = require('express');
const BinaryTree = require('./pre-order.traversal');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const tree = new BinaryTree();
    tree.insert(100);
    tree.insert(120);
    tree.insert(80);
    tree.insert(98);
    tree.insert(86);
    tree.insert(45);
    tree.insert(58);
    tree.insert(65);
    tree.insert(25);
    tree.insert(78);
    tree.insert(69);
    tree.insert(97);
    tree.insert(23);
    tree.insert(94);
    tree.insert(90);
    tree.insert(88);
    tree.insert(72);
    tree.insert(54);
    tree.insert(33);
    tree.insert(130);
    tree.insert(115);

    res.send('pre-order traversal:' + tree.preOrder());

})

app.listen(port, () => {
    console.log(`binary tree pre-order traversal listening at port ${port}`)
})