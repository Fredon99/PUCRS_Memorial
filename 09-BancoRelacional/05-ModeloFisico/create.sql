-- Criação da table Departamento

CREATE TABLE TabelaDepartamento (
    id_departamento VARCHAR(20) PRIMARY KEY NOT NULL,
    NomeDepartamento VARCHAR(50) NOT NULL,
    NumeroDepartamento VARCHAR(20) NOT NULL,
    id_colaborador_gerente VARCHAR(20) NOT NULL
);

-- Funcao para validar a qtd. de colaboradores
CREATE OR REPLACE FUNCTION verificar_colaboradores_departamento() 
RETURNS TRIGGER AS $$
BEGIN
    -- Verifica a quantidade de colaboradores no departamento
    IF (SELECT COUNT(*) FROM TabelaColaboradores WHERE id_departamento = NEW.id_departamento) < 2 THEN
        RAISE EXCEPTION 'O departamento % deve ter pelo menos 2 colaboradores.', NEW.id_departamento;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Essa trigger deve ser habilitada após a primeira carga de na table
-- Trigger para validacao da qtd. colaboradore
CREATE TRIGGER trigger_verificar_colaboradores_departamento
AFTER INSERT OR UPDATE ON TabelaDepartamento
FOR EACH ROW
EXECUTE FUNCTION verificar_colaboradores_departamento();


-- Criação da tabela de colaboradores
CREATE TABLE TabelaColaboradores (
    id_colaborador VARCHAR(20) PRIMARY KEY NOT NULL,
    Salario DECIMAL,
    NomeColaborador VARCHAR(50) NOT NULL,
    EmailColaborador VARCHAR(50),
    Cargo VARCHAR(50) NOT NULL,
    CPFColaborador VARCHAR(11) NOT NULL UNIQUE,
    TelefoneColaborador VARCHAR(11) NOT NULL,
    id_departamento VARCHAR(20) NOT NULL,
    CONSTRAINT fk_colaborador_departamento FOREIGN KEY (id_departamento) REFERENCES TabelaDepartamento(id_departamento)
);

-- Criação da table de Clientes
CREATE TABLE TabelaClientes (
    id_cliente VARCHAR(20) PRIMARY KEY NOT NULL,
    DataNascimento DATE NOT NULL CHECK (EXTRACT(YEAR FROM AGE(DataNascimento)) >= 18),
    CPF VARCHAR(11) NOT NULL UNIQUE,
    Nome VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Rua VARCHAR(50) NOT NULL,
    Bairro VARCHAR(50) NOT NULL,
    Cidade VARCHAR(50) NOT NULL,
    Estado CHAR(2) NOT NULL,
    CEP CHAR(8) NOT NULL,
    id_colaborador VARCHAR(20) NOT NULL,
    CONSTRAINT fk_cliente_colaborador FOREIGN KEY (id_colaborador) REFERENCES TabelaColaboradores(id_colaborador)
);

-- Criação da table telefontes
CREATE TABLE TabelaTelefones (
    id_telefone VARCHAR(20) PRIMARY KEY NOT NULL,
    Telefone VARCHAR(11) NOT NULL,
    id_cliente VARCHAR(20) NOT NULL,
    CONSTRAINT fk_telefone_cliente FOREIGN KEY (id_cliente) REFERENCES TabelaClientes(id_cliente)
);

-- Garante que cada cliente tenha pelo menos dois telefones
CREATE OR REPLACE FUNCTION verificar_minimo_telefones()
RETURNS TRIGGER AS $$
BEGIN
    IF (SELECT COUNT(*) FROM TabelaTelefones WHERE id_cliente = NEW.id_cliente) < 2 THEN
        RAISE EXCEPTION 'Cada cliente deve ter pelo menos dois números de telefone.';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

--Trigger para qtd. de telefones
CREATE TRIGGER trigger_verificar_minimo_telefones
AFTER INSERT OR DELETE ON TabelaTelefones
FOR EACH ROW EXECUTE FUNCTION verificar_minimo_telefones();


-- Criação da table de Emprestimo
CREATE TABLE TabelaEmprestimo (
    id_emprestimo VARCHAR(20) PRIMARY KEY NOT NULL,
    Status BOOLEAN NOT NULL,
    Prazo INTEGER NOT NULL,
    DataInicio DATE NOT NULL,
    Tipo VARCHAR(20) NOT NULL,
    Valor DECIMAL NOT NULL,
    id_cliente VARCHAR(20) NOT NULL,
    CONSTRAINT fk_emprestimo_cliente FOREIGN KEY (id_cliente) REFERENCES TabelaClientes(id_cliente)
);

-- Criação da table de Pagamentos
CREATE TABLE TabelaPagamentos (
    id_pagamento VARCHAR(20) PRIMARY KEY NOT NULL,
    DataPagamento DATE NOT NULL,
    Valor DECIMAL NOT NULL,
    Status VARCHAR(20) NOT NULL,
    id_emprestimo VARCHAR(20) NOT NULL,
    CONSTRAINT fk_pagamento_emprestimo FOREIGN KEY (id_emprestimo) REFERENCES TabelaEmprestimo(id_emprestimo)
);

-- Criação da table Conta
CREATE TABLE TabelaConta (
    id_conta VARCHAR(20) PRIMARY KEY NOT NULL,
    NumeroConta VARCHAR(20) NOT NULL,
    TipoConta VARCHAR(50) NOT NULL,
    Saldo DECIMAL NOT NULL,
    DataAbertura DATE
);

-- Criação table ScoreCredito
CREATE TABLE TabelaScoreCredito (
    id_score VARCHAR(20) NOT NULL PRIMARY KEY,
    DataConsulta DATE NOT NULL,
    Fonte VARCHAR(50) NOT NULL,
    Pontuacao INTEGER NOT NULL,
    Justificativa TEXT,
    id_cliente VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES TabelaClientes(id_cliente)
);

-- Criação da tabela ClienteConta
CREATE TABLE TabelaClienteConta (
    id_conta VARCHAR(20) NOT NULL,
    id_cliente VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_conta, id_cliente),
    CONSTRAINT fk_cliente_conta FOREIGN KEY (id_conta) REFERENCES TabelaConta(id_conta),
    CONSTRAINT fk_conta_cliente FOREIGN KEY (id_cliente) REFERENCES TabelaClientes(id_cliente)
);
