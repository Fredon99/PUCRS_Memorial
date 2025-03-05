-- Insert table Departamento
INSERT INTO TabelaDepartamento (id_departamento, NomeDepartamento, NumeroDepartamento, id_colaborador_gerente)
VALUES 
    ('DPT001', 'Recursos Humanos', 'RH01', 'COL001'),
    ('DPT002', 'Tecnologia', 'TI01', 'COL003');


-- Insert na table Colaboradores
INSERT INTO TabelaColaboradores (id_colaborador, Salario, NomeColaborador, EmailColaborador, Cargo, CPFColaborador, TelefoneColaborador, id_departamento)
VALUES 
    ('COL001', 5000.00, 'Carlos Silva', 'carlos@email.com', 'Gerente RH', '12345678901', '11987654321', 'DPT001'),
    ('COL002', 3000.00, 'Ana Souza', 'ana@email.com', 'Analista RH', '98765432100', '11912345678', 'DPT001'),
    ('COL003', 7000.00, 'João Pereira', 'joao@email.com', 'Gerente TI', '55544433322', '11955544433', 'DPT002'),
    ('COL004', 4500.00, 'Mariana Lima', 'mariana@email.com', 'Dev Back-end', '66677788899', '11966677788', 'DPT002');

-- Insert table Clientes
INSERT INTO TabelaClientes (id_cliente, DataNascimento, CPF, Nome, Email, Rua, Bairro, Cidade, Estado, CEP, id_colaborador)
VALUES 
    ('CLI001', '1990-05-10', '11122233344', 'Pedro Almeida', 'pedro@email.com', 'Rua A', 'Centro', 'São Paulo', 'SP', '01001000', 'COL003'),
    ('CLI002', '1985-09-20', '55566677788', 'Juliana Costa', 'juliana@email.com', 'Rua B', 'Bairro X', 'Rio de Janeiro', 'RJ', '20020000', 'COL004');

-- Insert table Telefones
INSERT INTO TabelaTelefones (id_telefone, Telefone, id_cliente)
VALUES 
    ('TEL001', '11988887777', 'CLI001'),
    ('TEL002', '11977776666', 'CLI001'),
    ('TEL003', '21966665555', 'CLI002'),
    ('TEL004', '21955554444', 'CLI002');

-- Insert table score credito
INSERT INTO TabelaScoreCredito (id_score, DataConsulta, Fonte, Pontuacao, Justificativa, id_cliente)
VALUES 
    ('SCR001', '2024-03-01', 'Banco XPTO', 750, 'Bom histórico de crédito', 'CLI001'),
    ('SCR002', '2024-03-02', 'Banco YZ', 600, 'Dívidas antigas quitadas', 'CLI002');

-- Insert table Conta
INSERT INTO TabelaConta (id_conta, NumeroConta, TipoConta, Saldo, DataAbertura)
VALUES 
    ('CON001', '12345-6', 'Corrente', 10000.00, '2022-01-15'),
    ('CON002', '67890-1', 'Poupança', 5000.00, '2023-06-20');

-- Insert table ClienteConta
INSERT INTO TabelaClienteConta (id_conta, id_cliente)
VALUES 
    ('CON001', 'CLI001'),
    ('CON002', 'CLI002');

-- Insert table Emprestimo 
INSERT INTO TabelaEmprestimo (id_emprestimo, Status, Prazo, DataInicio, Tipo, Valor, id_cliente)
VALUES 
    ('EMP001', TRUE, 24, '2023-07-01', 'Pessoal', 15000.00, 'CLI001'),
    ('EMP002', FALSE, 36, '2022-05-10', 'Automóvel', 30000.00, 'CLI002');

-- Insert table Pagamentos
INSERT INTO TabelaPagamentos (id_pagamento, DataPagamento, Valor, Status, id_emprestimo)
VALUES 
    ('PAG001', '2024-02-01', 625.00, 'Pago', 'EMP001'),
    ('PAG002', '2024-02-15', 1200.00, 'Pago', 'EMP002'),
    ('PAG003', '2024-03-01', 625.00, 'Pendente', 'EMP001'),
    ('PAG004', '2024-03-15', 1200.00, 'Pendente', 'EMP002');



