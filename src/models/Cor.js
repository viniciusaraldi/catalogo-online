import mongoose from "mongoose";

const corSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    cor: {type: String, required: true}
});

const cores = mongoose.model("cores", corSchema);

export default cores;