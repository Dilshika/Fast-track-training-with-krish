const express = require('express');
const bubbleSort = require('./bubbleSort');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    var unsortedArray = [1, 2, 3, 8, 3, 0, 9, 7, 6];
    const sort = bubbleSort;
    res.send(sort.bubbleSort(unsortedArray));
});

app.listen(port, () => {
    console.log(`Bubble sort running on port: ${port} `)
});