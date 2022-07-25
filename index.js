const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Caminho ou arquivo não encontrado o arquivo.'));
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';

    try{
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
      console.log(chalk.green(texto));
    }catch(erro){
      trataErro(erro);
    };    
}

pegaArquivo('./arquivos/texto1.md');