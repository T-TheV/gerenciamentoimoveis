const prompt = require("prompt-sync");
const { imoveis } = require("./imoveis");

function criarImovel(id, enderecoImovel, proprietario, inquilino, valorAluguel, dataInicioContrato, dataFimContrato, status) {
    const novoImovel = {
        id,
        enderecoImovel,
        proprietario,
        inquilino,
        valorAluguel,
        dataInicioContrato,
        dataFimContrato,
        status,}
    try {
        imoveis.push(novoImovel);
        }
    catch (error) {
        console.error("Houve uma falha ao criar imóvel.", error.message)
}
return novoImovel;
}
module.exports =  { criarImovel }
