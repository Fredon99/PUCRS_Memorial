export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "estudante";
        this.ativo = ativo;
    }

    exibirInfos() {
        return `O nome dele é ${this.nome}, pode ser contatado através do email ${this.email}, e está matriculado na instituição como ${this.role}.`
    }
}

const novoUser = new User('João','j@j.com','02/09/2001')

//console.log(novoUser.exibirInfos())
