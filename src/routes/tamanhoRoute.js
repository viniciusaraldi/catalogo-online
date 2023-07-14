import express from "express";
import tamanhosController from "../controller/tamanhoController.js";

const router = express.Router();

router
    .get("/tamanhos", tamanhosController.pegaTodosTamanho)
    .get("/tamanhos/:id", tamanhosController.pegaTamanhoPorId)
    .post("/tamanhos", tamanhosController.adicionaTamanho)
    .put("/tamanhos/:id", tamanhosController.atualizaTamanho)
    .delete("/tamanhos/:id", tamanhosController.deletaTamanho)

export default router;
