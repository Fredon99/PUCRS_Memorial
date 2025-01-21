import User from "./02-encapsulamento.js";

class Docente extends User {
    constructor (nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    exibirInfos() {
        return `Olá sou o(a) ${this.nome}, e sou ${this.role} na instituição.`
    }

    aprovarEstudante(estudante, curso) {
        return `${estudante} passou no curso de ${curso}, e o(a) responsável pelo curso é ${this.nome}`;
    }
}

const novoDocente = new Docente('Ana', 'a@a.com', '01/01/1999');

console.log(novoDocente.aprovarEstudante('Joaquin', 'python'));
console.log(novoDocente.exibirInfos());