const express = require('express');
const binarySearch = require('./binarySearch');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const value = 7;
    const search = binarySearch;
    res.send(search.binarySearch(array, value));
})

app.listen(port, () => {
    console.log(`Binary search algorithm runs on port ${port}`);
})