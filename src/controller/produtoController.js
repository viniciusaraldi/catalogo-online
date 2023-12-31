import produtos from "../models/Produto.js";

class produtosController {

    static pegaTodosProdutos = async (req, res) => {
        try {
            const dados = await produtos.find().populate("tamanho", '-_id').populate("cor", '-_id').populate("categoria", '-_id').exec();
            res.status(200).json(dados);
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static pegaProdutosPorId = async (req, res) => {
        try {
            const id = mongoose.Types.ObjectId(req.params.id)
            const dados = await produtos.findById(id).populate("tamanho", '-_id').populate("cor", '-_id').populate("categoria", '-_id').exec();
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

    static atualizaProduto = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id);
            const dadosAtualizados = await produtos.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send(dadosAtualizados.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static deletaProduto = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id);
            const dadosRemovidos = await produtos.findByIdAndDelete(id);
            res.status(200).send(dadosRemovidos.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }
}

export default produtosController