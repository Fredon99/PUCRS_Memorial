db.pedidos.insertOne(
    {
        _id: ObjectId('67d3660910b8ab3560ccb1fa'),
        dataEmissao: ISODate("2024-02-25T00:00:00.000Z"),
        cliente: ObjectId('67d3637410b8ab3560ccb1f5'),
        itemPedidos: [
            {
                produto: ObjectId('67d3647610b8ab3560ccb1f8'),
                quantidade: 2,
                valorUnitario: 129.9
            },
            {
                produto: ObjectId('67d364d910b8ab3560ccb1f9'),
                quantidade: 1,
                valorUnitario: 199.99
            }
        ]
    }
)


db.pedidos.insertOne(
    {
        _id: ObjectId('67d3665310b8ab3560ccb1fb'),
        dataEmissao: ISODate("2024-02-25T00:00:00.000Z"),
        cliente: ObjectId('67d3638e10b8ab3560ccb1f6'),
        itemPedidos: [
            {
                produto: ObjectId('67d3647610b8ab3560ccb1f8'),
                quantidade: 2,
                valorUnitario: 129.9
            }
        ]
    }
)
