const express = require('express');
const routes = require('./rotas');
const app = express();

app.use(express.json());
app.use('/', routes);


const port = 3000;
app.listen(port, () => {
    console.log(`O Servidor está rodando em http://localhost:${port}`);
});

