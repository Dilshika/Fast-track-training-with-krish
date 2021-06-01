const express = require('express');
const linearSearch = require('./linearSearch');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const value = 5;
    const search = linearSearch;
    res.send(search.linearSearch(array, value));
})

app.listen(port, () => {
    console.log(`Linear search algorithm runs on port ${port}`);
})