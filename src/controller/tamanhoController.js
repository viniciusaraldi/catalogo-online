import tamanhos from "../models/Tamanho.js";
import mongoose from "mongoose";

class tamanhosController {

    static pegaTodosTamanho = async (req, res) => {
        try {
            const dados = await tamanhos.find()
            res.status(200).json(dados);
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static pegaTamanhoPorId = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id)
            const dados = await tamanhos.findById(id)
            res.status(200).json(dados);
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static adicionaTamanho = async (req, res) => {
        try {
            const dados = new tamanhos(req.body);
            const dadosEnvio = await dados.save();
            res.status(201).send(dadosEnvio);
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static atualizaTamanho = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id);
            const dadosAtualizados = await tamanhos.findByIdAndUpdate(id);
            res.status(200).send(dadosAtualizados.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }

    static deletaTamanho = async (req, res) => {
        try {
            const id = new mongoose.Types.ObjectId(req.params.id);
            const dadosRemovidos = await tamanhos.findByIdAndDelete(id);
            res.status(200).send(dadosRemovidos.toJSON());
        } catch (err) {
            res.status(500).send({message: "erro de servidor" + err});
        }
    }
}

export default tamanhosController