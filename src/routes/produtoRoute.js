import express from "express";
import produtosController from "../controller/produtoController.js";

const router = express.Router();

router
    .get("/produtos", produtosController.pegaTodosProdutos)
    .post("/produtos", produtosController.adicionaProduto)

export default router;