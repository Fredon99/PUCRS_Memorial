db.pedidos.find({"dataEmissao" : {$lt:ISODate("2024-02-25T00:00:00.000Z")}})

db.pedidos.find({
    itemPedidos: { 
      $elemMatch: { valorUnitario: { $lt: 230 } } 
    }
  })