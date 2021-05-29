const express = require('express');
const thirdLargest = require('./thirdLargest');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    let array = [1, 2, 3, 8, 3, 0, 9, 7, 6];
    const find = thirdLargest(array);
    res.send(find);
});

app.listen(port, () => {
    console.log(`app is running at port: ${port}`);
})