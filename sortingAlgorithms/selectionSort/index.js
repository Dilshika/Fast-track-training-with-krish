const express = require('express');
const selectionSort = require('./selectionsort');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    let array = [1, 2, 3, 8, 3, 0, 9, 7, 6];
    const sort = selectionSort(array);
    res.send(sort);
});

app.listen(port, () => {
    console.log(`app is running at port: ${port}`);
})