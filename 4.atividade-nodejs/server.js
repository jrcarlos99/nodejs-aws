const express = require('express');
const app = express();
app.use(express.json());


//Rota Principal
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

//Rota de sobre 
app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre</h1><p>Este é um servidor de teste.</p>');
});


//Rota de contato
app.get('/contato', (req, res) => {
    res.send('<hq>Contato</h1><p>Entre em contato conosco pelo email: <a href="mailto:joao@gmail.com">meu_email</a> </p>');
});


// Rota de informações
app.post('/dados', (req, res) => {
    const { nome, idade, email } = req.body;
    res.send(`O seu nome é ${nome} você tem ${idade} anos e seu é email é ${email}`);
});

app.post('/informacao', (req, res) => {
    const { nome, idade, sintomas } = req.body;
    res.send(`O nome do paciente é ${nome}, ele tem ${idade} anos e o sintoma é: ${sintomas}`)
})

const port = 3000;
app.listen(port, () => {
    console.log(`O Servidor está rodando em http://localhost:${port}`);
});