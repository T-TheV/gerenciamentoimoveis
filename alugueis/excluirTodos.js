const prompt = require("prompt-sync");
let validator = require("validator")
const { imoveis } = require("./imoveis");

function excluirTodos() {
    imoveis.length = 0
    console.log("Banco Imobiliario tomou tudo")
}

module.exports = { excluirTodos }