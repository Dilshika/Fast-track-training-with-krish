const express = require('express');
const countChar = require('./countchar');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    let sentence = "This one is a testing sentence.".toLowerCase();

    //remove white spaces
    sentence = sentence.replace(/ /g, '');
    const count = countChar(sentence);
    res.send(count);
})

app.listen(port, () => {
    console.log(`app is listening at pot: ${port}`)
})