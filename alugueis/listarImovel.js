const prompt = require("prompt-sync");
let validator = require("validator")

const { imoveis } = require("./imoveis");

function listarImovel() {
    try {
        console.table(imoveis)

    } catch (error) {
        console.error("Falha ao listar imoveis!", error.message)
    }
}

module.exports = { listarImovel }