const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Yoshito Hello World!Yoshito'));

app.get('/', (req, res) => res.send('Good moring!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
