const prompt = require("prompt-sync");
let validator = require("validator")

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

        if (
        validator.isEmpty(id) || 
        validator.isEmpty(enderecoImovel) || 
        validator.isEmpty(proprietario) || 
        validator.isEmpty(inquilino) ||
        validator.isEmpty(valorAluguel) ||
        validator.isEmpty(dataInicioContrato) ||
        validator.isEmpty(dataFimContrato) ||
        validator.isEmpty(status)
    ){
            
            console.error("Todos os campos devem ser preenchidos!")
            return
        }       
        if(!validator.isDate(dataInicioContrato, {format: "DD/MM/YYYY"}) || !validator.isDate(dataFimContrato, {format: "DD/MM/YYYY"})){
            console.error("Você deve por uma data válida!")
        }
    try {
        imoveis.push(novoImovel);
        console.table(novoImovel)
        }
    catch (error) {
        console.error("Houve uma falha ao criar imóvel.", error.message)
}
return novoImovel;
}
module.exports =  { criarImovel }
