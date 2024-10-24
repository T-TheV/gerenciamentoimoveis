const prompt = require("prompt-sync")
const { imoveis } = require("./imoveis")

// function criarImovel(id, enderecoImovel, proprietario, inquilino, valorAluguel, dataInicioContrato, dataFimContrato, status)
function editarImovel(id, novoEnderecoImovel, novoProprietario,
    novoInquilino, novoValorAluguel, 
    novoDataInicioContrato, novoDataFimContrato, novoStatus) {
        try {
            const editar = imoveis.find(editar => editar.id === id);
            if (editar) {
                editar.enderecoImovel = novoEnderecoImovel
                editar.proprietario = novoProprietario
                editar.inquilino = novoInquilino
                editar.valorAluguel = novoValorAluguel
                editar.dataInicioContrato = novoDataInicioContrato
                editar.novoDataFimContrato = novoDataFimContrato
                editar.status = novoStatus

                console.log("Funcionário editado com sucesso!")
            } else {
                console.log("ID inválido!")
            }
        } catch (error) {
            console.error("Falha ao editar o imovel!", error.message)
        }
    
}
module.exports = { editarImovel }