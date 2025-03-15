db.livros.insertOne(
  {
    _id: ObjectId('67d3647610b8ab3560ccb1f8'),
    nome: 'Clean Code',
    dataLancamento: ISODate("2020-09-15T00:00:00.000Z"),
    preco: 129.9,
    categoria: 'Computação'
  }
)

db.livros.insertOne(
  {
    _id: ObjectId('67d364d910b8ab3560ccb1f9'),
    nome: 'O Senhor dos Anéis',
    dataLancamento: ISODate("1954-07-29T00:00:00.000Z"),
    preco: 199.99,
    categoria: 'Fantasia'
  }
)