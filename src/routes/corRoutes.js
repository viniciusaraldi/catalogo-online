import express from "express";
import coresController from "../controller/corController.js";

const router = express.Router();

router
    .get("/cores", coresController.pegaTodosCor)
    .get("/cores/:id", coresController.pegaCorPorId)
    .post("/cores", coresController.adicionaCor)
    .put("/cores/:id", coresController.atualizaCor)
    .delete("/cores/:id", coresController.deletaCor)

export default router;
