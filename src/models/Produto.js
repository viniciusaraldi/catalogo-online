import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true},
    descricao: {type: String},
    categoria: {type: String, required: true},
    cor: {type: String, required: true},
    id: {type: Number, required: true},
    tamanho: {type: Array, required: true},
    preco: {type: mongoose.Decimal128, required: true}
});

const produtos = mongoose.model("produtos", produtoSchema);

export default produtos;