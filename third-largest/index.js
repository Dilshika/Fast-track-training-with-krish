const express = require('express');
const thirdLargest = require('./thirdLargest');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const dataArray = [1, 2, 3, 8, 3, 0, 9, 7, 16];
    const find = thirdLargest;
    res.send(find.findThirdLargest(dataArray));
});

app.listen(port, () => {
    console.log(`app is running at port: ${port}`);
})