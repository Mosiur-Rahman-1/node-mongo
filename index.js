const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('hello world i just started the node get request'));
app.listen(3000, () => console.log("listening 3000 port"));