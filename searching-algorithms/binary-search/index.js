const express = require('express');
const binarySearch = require('./binarySearch');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var value = 22;
    const search = binarySearch(array, value);
    res.send(search);
})

app.listen(port, () => {
    console.log(`Binary search algorithm runs on port ${port}`);
})