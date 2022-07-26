const pegaArquivo = require('../index');

const arrayResult = [
    {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
];

describe('Função pegaArquivo', () => {
    it("deve ser uma função", () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('D:/Workspaces/NodeJs/proj_sandbox_nodejs__criando_biblioteca/test/arquivos/texto1.md');
        expect(resultado).toEqual(arrayResult);
    })
});