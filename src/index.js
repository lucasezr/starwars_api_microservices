const express = require('express');
const app = express();
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

app.listen(3000, () => {
    console.log ('Server listen to port 3000')
})

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

module.exports = server; 