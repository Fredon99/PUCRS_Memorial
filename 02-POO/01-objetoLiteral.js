const user = {
    nome: 'Fred',
    email: 'f@f.com',
    nascimento: '2025-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
      return { nome: this.nome, email: this.email };
    }
   }

   console.log(user.exibirInfos())