const express = require('express');
const missingOne = require('./missingOne');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    let sequence = [1, 5, 4, 6, 2];
    const find = missingOne;
    res.send(find.findMiss(sequence));
})

app.listen(port, () => {
    console.log(`app is listening at pot: ${port}`)
})