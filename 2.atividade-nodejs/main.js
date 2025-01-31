const os = require('os');
const saudacao = require('./util');//
const chalk = require('chalk');


console.log(chalk.white,'Sistema Operacional: ', os.platform());
console.log(chalk.red,'Release: ', os.release());
console.log (chalk.yellow,'Versão: ', os.version());
console.log( chalk.blue,'Memoria Livre: ', os.freemem());

const nome = saudacao('João Carlos');
    console.log(chalk.green,(nome));