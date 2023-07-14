import express from "express";
import categoriasController from "../controller/categoriaController.js";

const router = express.Router();

router
    .get("/categorias", categoriasController.pegaTodosCategoria)
    .get("/categorias/:id", categoriasController.pegaCategoriaPorId)
    .post("/categorias", categoriasController.adicionaCategoria)
    .put("/categorias/:id", categoriasController.atualizaCategoria)
    .delete("/categorias/:id", categoriasController.deletaCategoria)

export default router;
