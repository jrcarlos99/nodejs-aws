const express = require('express');
const router = express.Router();

//Rota Principal
router.get('/', (req, res) => {
    res.send('<h1>Minha página principal</h1>');
});

//Rota de sobre 
router.get('/sobre', (req, res) => {
    res.send('<h1>Sobre</h1><p>Este é um servidor de teste.</p>');
});


//Rota de contato
//router.get('/contato', (req, res) => {
//    res.send('<hq>Contato</h1><p>Entre em contato conosco pelo email: <a href="mailto:joao@gmail.com">meu_email</a> </p>');
//});



module.exports = router;