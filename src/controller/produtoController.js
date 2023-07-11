import produtos from "../models/Produto.js";

class produtosController {

    static pegaTodosProdutos = async (req, res) => {
        try {
            const dados = await produtos.find()
            res.status(200).json(dados);
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static adicionaProduto = async (req, res) => {
        try {
            const dados = new produtos(req.body);
            const dadosEnvio = await dados.save();
            res.status(201).send(dadosEnvio.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }
}

export default produtosController