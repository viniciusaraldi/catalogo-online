import express from "express";
import produtos from "../routes/produtoRoute.js";
import corsGeral from "../middleware/cors.js";

const router = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({message: "Página Inicial"})
    })

    app.use(
        express.json(),
        produtos,
        corsGeral
    )
}

export default router;