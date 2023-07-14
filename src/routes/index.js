import express from "express";
import produtos from "../routes/produtoRoute.js";
import tamanhos from "../routes/tamanhoRoute.js";
import corsGeral from "../middleware/cors.js";
import categorias from "../routes/categoriaRoutes.js";
import cores from "../routes/corRoutes.js";

const router = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({message: "Página Inicial"})
    })

    app.use(
        express.json(),
        produtos,
        tamanhos,
        cores,
        categorias,
        corsGeral
    )
}

export default router;