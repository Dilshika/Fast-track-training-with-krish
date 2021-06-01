const express = require('express');
const mergeSort = require('./mergeSort');

const app = express();

const port = 8000;

app.get('/', (req, res) => {
    const array = [1, 2, 3, 8, 3, 0, 9, 7, 6, 21];
    const sort = mergeSort;
    res.send(sort.mergeSort(array));

})

app.listen(port, () => {
    console.log(`Merge Sort listening at port: ${port}`);
});