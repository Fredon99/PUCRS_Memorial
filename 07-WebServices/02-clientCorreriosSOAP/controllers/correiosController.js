import soap from 'soap';
import util from 'util';

class Correios {

    static async description(req,res) {
        try {
            const url = "https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl";
            
            const client =  await new Promise ((resolve,reject) => {
                soap.createClient(url , (err, client) => {
                   err ? reject(new Error("Failed to create a SOAP Client")) : resolve(client)
                })
            });

            const description = client.describe().AtendeClienteService.AtendeClientePort
            //solucao de contorno devido a estrutura circular - nao consegue transformar em json
            res.status(200).send(util.inspect(description, { depth: null }))
        
        } catch (error) {
            res.status(500).json({ message : "Erro ao descrever serviço", error: error.message });
        }
    }

    static async consultaCEP(req, res) {
        res.status(200).json({message: "Esse serviço agora exige usuário e senha"})
    }
}

export default Correios;