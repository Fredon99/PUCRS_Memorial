import soap from 'soap';

class Calculator {
    
    static async describe(req, res) {
        try {
            const url = "http://www.dneonline.com/calculator.asmx?WSDL";
        
            const client = await new Promise((resolve,reject) => { 
                soap.createClient(url, async (err, client) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(client)
                    }
                })
            });

            const description = client.describe().Calculator.CalculatorSoap;
            res.status(200).send(description);

        } catch (error) {
            res.status(500).send("Erro ao descrever o serviço");
        }
    }

    static async calculate(req, res) {

        const operation = req.params.operation
        const valueA = Number(req.params.valueA)
        const valueB = Number(req.params.valueB)

        const validOperations = ["Add", "Subtract", "Multiply", "Divide"];

        if (!validOperations.includes(operation)) {
            return res.status(400).json({ error: `Operação inválida. Escolha entre: ${validOperations.join(", ")}` });
        } else if (operation === "Divide" && valueB === 0) {
            return res.status(400).json({error: "Não é possível realizar divisão por zero."})
        }

        try {
            const url = "http://www.dneonline.com/calculator.asmx?WSDL";
            
            const calculation = await new Promise((resolve,reject) => { 
                soap.createClient(url, async (err, client) => {
                    client[operation]({intA: valueA, intB: valueB}, function(err,result) {
                        if (err){
                            reject(err);
                        } else {
                            resolve(result)
                        }
                    })
                })  
            });

            res.status(200).send(calculation)

        } catch (error) {
            res.status(500).send("Erro ao realizar cálculo");
        }
        
    }
}

export default Calculator;