class Example {

    static async mainRoute(_,res) {
        try {
            res.status(200).json({message: "Você está na rota main dos exemplos - Verifique a documentação para acessar as demais rotas."});
        } catch (error) {
            res.status(500).json({error: "erro ao acessar rota main dos exemplos"});
        }
    };

    static async get(_,res) {
        try {
            res.status(200).json({message: "rota de GET"});
        } catch (error) {
            res.status(500).json({error: "erro ao acessar rota GET"});
        }
    };

    static async getById(req,res) {
        const id = req.params.id
        try {
            res.status(200).json({message: `rota de GET para o id - ${id}`});
        } catch (error) {
            res.status(500).json({error: "erro ao acessar rota GET"});
        }
    };

    static async post(req,res) {
        const id = req.params.id
        try {
            res.status(200).json({message: `rota de POST para o id - ${id}`});
        } catch (error) {
            res.status(500).json({error: "erro ao acessar rota POST"});
        }
    };

    static async put(req,res) {
        const id = req.params.id
        try {
            res.status(200).json({message: `rota de PUT para o id - ${id}`});
        } catch (error) {
            res.status(500).json({error: "erro ao acessar rota PUT"});
        }
    };

    static async delete(req,res) {
        const id = req.params.id
        try {
            res.status(200).json({message: `rota de DELETE do id - ${id}`});
        } catch (error) {
            res.status(500).json({error: "erro ao acessar rota DELETE"});
        }
    };


} 

export default Example;