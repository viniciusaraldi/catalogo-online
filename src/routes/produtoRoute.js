import express from "express";
import produtosController from "../controller/produtoController.js";

const router = express.Router();

router
    .get("/produtos", produtosController.pegaTodosProdutos)
    .get("/produtos/:id", produtosController.pegaProdutosPorId)
    .post("/produtos", produtosController.adicionaProduto)
    .put("/produtos/:id", produtosController.atualizaProduto)
    .delete("/produtos/:id", produtosController.deletaProduto)

export default router;
