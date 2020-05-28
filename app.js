const express = require('express');
const app = express();
const port = 8080;
const message = { message: 'hola mundo'};

app.get('/', (req, res) => res.json(message));

app.listen(port, () => console.log(`Listening on port ${port}!`));

