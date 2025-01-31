const express = require('express');
const sqlite3 = require('sqlite3')sqlite3.verbose();
const router = express.Router();


// conexão ao banco de dados
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err.message);
    } else {
        console.log('Conectado ao banco de dados com sucesso!');
    }
});

//Criação da tabela tasaks
db.run( `CREATE TABALE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT null,
    status INTEGER NOT NULL
    )
`
);

router.get('/task', (req, res) => {
    const query = 'SELECT * FROM tasks';
    db.all(query, [], (err, rows => {
        if (err) {
            console.error('Erro ao executar a query', err.message);
            return res.status(500).json({error: 'Ocorreu um erro ao buscar as tasks'});
        }
        res.json(rows);
    })
});

router.post('/task', (req, res) => {
    const {titulo, status} = req.body;
    const query = 'INSERT INTO tasks (titulo, status) VALUES (?, ?)';
    db.run (query, [titulo, status ?  : 0'], function (err{
        if (err) {
            return res.status(500).json({error : err.message});
        }
    }))
})



module.exports = router;

