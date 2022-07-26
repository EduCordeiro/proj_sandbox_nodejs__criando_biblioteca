const chalk = require('chalk');
const pegaArquivo = require('./index');
const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    console.log('Lista de linkls', resultado);
}


processaTexto(caminho);