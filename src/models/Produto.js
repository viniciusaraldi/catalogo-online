import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true},
    descricao: {type: String},
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: "categorias", required: true},
    cor: {type: mongoose.Schema.Types.ObjectId, ref: "cores", required: true},
    tamanho: {type: mongoose.Schema.Types.ObjectId, ref: "tamanhos", required: true},
    preco: {type: mongoose.Decimal128, required: true}
});

const produtos = mongoose.model("produtos", produtoSchema);

export default produtos;