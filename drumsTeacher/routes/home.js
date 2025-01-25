const express = require("express");
const router = express.Router();

// Metodos
const Initial_Greetings = (req, res) => {
    res.send("Olá. O server está funcionando. :)");
};

// Rotas
router.get("/", Initial_Greetings)

// Exportar
module.exports = router;