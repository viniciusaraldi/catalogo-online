import cores from "../models/Cor.js";

class coresController {

    static pegaTodosCor = async (req, res) => {
        try {
            const dados = await cores.find()
            res.status(200).json(dados);
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static pegaCorPorId = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id)
            const dados = await cores.findById(id)
            res.status(200).json(dados);
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static adicionaCor = async (req, res) => {
        try {
            const dados = new cores(req.body);
            const dadosEnvio = await dados.save();
            res.status(201).send(dadosEnvio.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static atualizaCor = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id);
            const dadosAtualizados = await cores.findByIdAndUpdate(id);
            res.status(200).send(dadosAtualizados.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static deletaCor = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id);
            const dadosRemovidos = await cores.findByIdAndDelete(id);
            res.status(200).send(dadosRemovidos.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }
}

export default coresController