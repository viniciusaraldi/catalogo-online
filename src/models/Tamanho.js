import mongoose, { isObjectIdOrHexString } from "mongoose";

const tamanhoSchema = new mongoose.Schema({
    id: {type: String},
    faixa: {type: String, required: true}
});

const tamanhos = mongoose.model("tamanhos", tamanhoSchema);

export default tamanhos;