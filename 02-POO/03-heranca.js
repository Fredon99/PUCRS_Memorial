import User from "./02-encapsulamento.js"

class Admin extends User {
    constructor (nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas`
    }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com", "16/09/1964")


// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso('javascript', 20))