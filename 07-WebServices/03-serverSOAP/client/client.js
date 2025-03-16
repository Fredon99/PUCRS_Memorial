import soap from 'soap'; 
const url = "http://localhost:8001/wscalc1?wsdl";


soap.createClient(url, function(err, client) {
    if (err) {
        throw err;
    } else {

        console.log("\n------------- Descrição -------------")
        console.log(client.describe().ws.calc)


        console.log("\n------------- Operações -------------")
        client.somar({a: 3, b: 4}, function(err,res){
            if (err) {
                throw err;
            } else {
                console.log(res);
            }
        })
    }
})