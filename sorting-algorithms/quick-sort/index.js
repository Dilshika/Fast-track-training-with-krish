const express = require('express');
const quickSort = require('./quicksort');

const app = express();

const port = 8000;

app.get('/', (req, res) => {
    const array = [1, 2, 3, 8, 60, 3, 0, 9, 7, 6, 25];
    let left = 0,
        right = array.length - 1;
    const sort = quickSort(array, left, right);
    res.send(sort);

})

app.listen(port, () => {
    console.log(`Quick Sort listening at port: ${port}`);
});