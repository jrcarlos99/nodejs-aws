const express = require('express');
const app = express();


//Rota Principal
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

//Rota de sobre 
app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre</h1><p>Este é um servidor de teste.</p>');
});

app.get('/contato', (req, res) => {
    res.send('<hq>Contato</h1><p>Entre em contato conosco pelo email: <a href="mailto:joao@gmail.com">meu_email</a> </p>')
})


const port = 3000;
app.listen(port, () => {
    console.log(`O Servidor está rodando em http://localhost:${port}`);
});