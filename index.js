const prompt = require("prompt-sync")()
let validator = require("validator")
const { criarImovel } = require("./alugueis/criarImovel")
const { editarImovel } = require("./alugueis/editarImovel")
const { excluirImovel } = require("./alugueis/excluirImovel")
const { listarImovel } = require("./alugueis/listarImovel")
const { excluirTodos } = require("./alugueis/excluirTodos")

function exibirMenu() {
    console.log("=======================")
    console.log("1 - Criar imovel")
    console.log("2 - Editar imovel")
    console.log("3 - Excluir imovel")
    console.log("4 - Listar imovel")
    console.log("5 - Sair do sistema")
    console.log("6 - Excluir todos os Imoveis")
    console.log("========================")
}

let opcao;
do {
    exibirMenu()
    opcao = parseInt(prompt("Digite uma opção: "))
    let id;
    switch (opcao) {
        case 1:
            id = prompt("Digite o id: ")
            enderecoImovel = prompt("Digite o endereço do Imovel: ")
            proprietario = prompt("Digite o proprietário do Imovel: ")
            inquilino = prompt("Digite o inquilino do Imovel: ")
            valorAluguel = prompt("Digite o valor do Imovel: ")
            dataInicioContrato = prompt("Digite a data de inicio do contrato para o Imovel: ")
            dataFimContrato = prompt("Digite a data de finalização do contrato para o Imovel: ")
            let status = prompt("Digite o status:")
            console.log("Criando imovel...")
            criarImovel(id, enderecoImovel, proprietario, inquilino, valorAluguel, dataInicioContrato, dataFimContrato, status)
            break
        case 2:
            id = prompt("Digite o id: ")
            novoEnderecoImovel = prompt("Digite o endereço do Imovel: ")
            novoProprietario = prompt("Digite o proprietário do Imovel: ")
            novoInquilino = prompt("Digite o inquilino do Imovel: ")
            novoValorAluguel = prompt("Digite o valor do Imovel: ")
            novoDataInicioContrato = prompt("Digite a data de inicio do contrato para o Imovel: ")
            novoDataFimContrato = prompt("Digite a data de finalização do contrato para o Imovel: ")
            novoStatus = prompt("Digite o status:")
            console.log("Editando imovel...")
            editarImovel(id, novoEnderecoImovel, novoProprietario, novoInquilino, novoValorAluguel, novoDataInicioContrato, novoDataFimContrato, novoStatus)
            break
        case 3:
            id = prompt("Digite o id: ")
            excluirImovel(id)
            console.log("Excluindo imovel...")
            break
        case 4:
            console.log("Listando imovels...")
            listarImovel()
            break
        case 5:
            console.log("Você optou por sair do sistema!")
            break;
        
        case 6:
            excluirTodos()
            break
        default:
            console.log("Opção inválida!")
            break
    }
} while (opcao !== 5);














//function criarImovel(id, enderecoImovel, proprietario, inquilino, valorAluguel, dataInicioContrato, dataFimContrato, status)
let casa1 = criarImovel("0", "Rua 01, bairro abc", "David", "João", "1250", "24/10/2024", "05/10/2025", "1")
//let casa2 = criarImovel("1", "Rua 02, bairro def", "Valtemir", "Lucas", "1550", "11/01/2024", "12/01/2025", "1")

//listarImovel() //Deve mostrar id 0 e 1, com ambos em status 1

// let editarcasa2 = editarImovel("1", "Rua 02, bairro def", "Valtemir", "Lucas", "1550", "11/01/2024", "12/01/2025", "0") // Deve mudar para status 0 (inativo)
// listarImovel() // Deve mostrar status 0 em id 1

// excluirImovel("1")
// listarImovel() // Deve mostrar somente id 0



//criarImovel()
//editarImovel()
//excluirImovel()
//listarImovel()