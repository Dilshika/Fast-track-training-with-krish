const express = require('express');
const countChar = require('./countchar');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const sentence = "This one is a testing sentence.".toLowerCase().replace(/ /g, '');
    const count = countChar;
    res.send(count.countChar(sentence));
})

app.listen(port, () => {
    console.log(`app is listening at pot: ${port}`)
})