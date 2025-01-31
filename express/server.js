const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Olá, essa é minha página inicial.</h1>');
});

const port = 3000;
app.listen(port,  () => {
    console.log(`O Servidor está rodando em http://localhost:${port}`)
});
