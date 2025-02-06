class ProductController {

    static async listProducts (_, res) {
        try {
            res.status(200).json({"message": "Lista de produtos carregada com sucesso."})
        } catch (error) {
            res.status(500).json({"Error message": "Ocorreu um erro ao listar os produtos"})
        }
    }

    static async listProduct(req,res) {
        try {
            const id = req.params.id
            res.status(200).json({"message" : `Detalhes do produto de id = ${id}`})
        } catch (error) {
            res.status(500).json({"Error message": "Ocorreu um erro ao listar o produto pelo id"})
        }
    }

    static async createProduct(req,res) {
        try {
            const product = req.body
            console.log("product:",product)
            res.status(200).json({
                "message" : "New product created",
                "product": product
            })
        } catch (error) {
            res.status(500).json({"Error message": "Ocorreu um erro ao criar produto"})
        }
    }

    static updateProduct(req, res) {
        const id = req.params.id
        try {
            res.status(200).json({"message" : `produto com id = ${id} atualizado com sucesso`})
        } catch (error) {
            res.status(500).json({"Error message": "Ocorreu um erro ao atualizar o produto"})
        }

    }

    static deleteProduct(req, res) {
        const id = req.params.id
        try {
            res.status(200).json({"message" : `produto com id = ${id} deletado com sucesso`})
        } catch (error) {
            res.status(500).json({"Error message": "Ocorreu um erro ao deletar o produto"})
        }

    }
}

export default ProductController;

