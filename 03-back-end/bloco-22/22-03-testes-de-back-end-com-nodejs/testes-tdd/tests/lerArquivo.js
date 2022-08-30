const { expect } = require("chai");
const { lerArquivo } = require('../lerArquivo');

describe('Chama a função "lerArquivo"', () => {
    describe('Quando o arquivo é lido com sucesso', () => {
        
        const CONTENT = 'Turma 20A';

        it('É uma string', async () => {
            const resposta = await lerArquivo('arquivo.txt');
            expect(resposta).to.be.a('string');
        });

        it('É igual ao conteúdo do arquivo', async () => {
            const resposta = await lerArquivo('arquivo.txt');
            expect(resposta).to.be.eq(CONTENT);                     // eq ou equals pode ser usado da mesma maneira
        });
    });
});

describe('Quando a leitura do arquivo falha', () => {
    describe('A resposta', () => {
        it('é igual a null', () => {

        });
    });
});