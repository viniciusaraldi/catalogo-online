import express from "express";
import db from "./config/db.js";
import router from "./routes/index.js";
import cors from "cors";

db.on("Error", console.log.bind(console, "Erro ao tentar conectar no Banco de Dados"));
db.once("open", console.log.bind(console, "Conectado ao Banco de Dados com sucesso!"));

const app = express();
app.use(cors())
router(app);

export default app;