const { imoveis } = require("./imoveis")

function excluirImovel(id) {
try {
    const excluir = imoveis.findIndex(excluir => excluir.id === id)
    if (excluir==-1) {
        console.log("Imovel não encontrado!")
    } else {
    imoveis.splice(excluir, 1)
    console.log("Imovel excluido com sucesso!")       
    }
} catch (error) {
    console.error("Falha ao excluir o imóvel!", error.message)
}    
}

module.exports = { excluirImovel }