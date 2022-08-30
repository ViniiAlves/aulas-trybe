const fs = require('fs').promises;

async function lerArquivo(filename){
    const content = await fs.readFile(filename, 'utf-8');
    return content;
};

module.exports = {
    lerArquivo
}