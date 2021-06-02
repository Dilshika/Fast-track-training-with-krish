const express = require('express');
const reverse = require('./reverse');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    let number = 145386725;
    const findReverse = reverse;
    res.send(findReverse.reverse(number));
});

app.listen(port, () => {
    console.log(`app running at ${port}`);
})