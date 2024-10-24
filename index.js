const prompt = require("prompt-sync")
const { criarImovel } = require("./alugueis/criarImovel")
const { editarImovel  } = require("./alugueis/editarImovel")
const { excluirImovel } = require("./alugueis/excluirImovel")
const { listarImovel } = require("./alugueis/listarImovel")

//function criarImovel(id, enderecoImovel, proprietario, inquilino, valorAluguel, dataInicioContrato, dataFimContrato, status)
let casa1 = criarImovel(0, "Rua 01, bairro abc", "David", "João", 1250, "24/10/2024 - 14:15", "05/10/2025 - 14:15", 1)
let casa2 = criarImovel(1, "Rua 02, bairro def", "Valtemir", "Lucas", 1550, "11/01/2024 - 20:15", "12/01/2025 - 20:15", 1)

listarImovel() //Deve mostrar id 0 e 1, com ambos em status 1

let editarcasa2 = editarImovel(1, "Rua 02, bairro def", "Valtemir", "Lucas", 1550, "11/01/2024 - 20:15", "12/01/2025 - 20:15", 0) // Deve mudar para status 0 (inativo)
listarImovel() // Deve mostrar status 0 em id 1

excluirImovel(1)
listarImovel() // Deve mostrar somente id 0



//criarImovel()
//editarImovel()
//excluirImovel()
//listarImovel()