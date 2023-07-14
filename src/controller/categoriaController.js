import categorias from "../models/Categoria.js";

class categoriasController {

    static pegaTodosCategoria = async (req, res) => {
        try {
            const dados = await categorias.find()
            res.status(200).json(dados);
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static pegaCategoriaPorId = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id)
            const dados = await categorias.findById(id)
            res.status(200).json(dados);
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static adicionaCategoria = async (req, res) => {
        try {
            const dados = new categorias(req.body);
            const dadosEnvio = await dados.save();
            res.status(201).send(dadosEnvio.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static atualizaCategoria = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id);
            const dadosAtualizados = await categorias.findByIdAndUpdate(id);
            res.status(200).send(dadosAtualizados.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static deletaCategoria = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id);
            const dadosRemovidos = await categorias.findByIdAndDelete(id);
            res.status(200).send(dadosRemovidos.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }
}

export default categoriasController