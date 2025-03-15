db.pedidos.aggregate(
    [{
        $lookup:
        {
            from: "livros",
            localField: "itemPedidos.produto",
            foreignField: "_id",
            as: "livros"
        }
    }]
)


db.pedidos.aggregate(
    [{
        $lookup:
        {
            from: "livros",
            localField: "itemPedidos.produto",
            foreignField: "_id",
            as: "livros"
        }
    }, {
        $lookup:
        {
            from: "clientes",
            localField: "cliente",
            foreignField: "_id",
            as: "cliente"
        }
    }]
)


db.pedidos.aggregate(
    [{
        $lookup:
        {
            from: "livros",
            localField: "itemPedidos.produto",
            foreignField: "_id",
            as: "livros"
        }
    }, {
        $lookup:
        {
            from: "clientes",
            localField: "cliente",
            foreignField: "_id",
            as: "cliente"
        }
    },
    {
        "$project": {
            "nomeCliente": "$cliente.nome",
            "quantidade": { "$arrayElemAt": ["$itemPedidos.quantidade", 0] },
            "valorTotal": { "$multiply": [{ "$arrayElemAt": ["$itemPedidos.valorUnitario", 0] }, { "$arrayElemAt": ["$itemPedidos.quantidade", 0] }] }

        }
    }]
)