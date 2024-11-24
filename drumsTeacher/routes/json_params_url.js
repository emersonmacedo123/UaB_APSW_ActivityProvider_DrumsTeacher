const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");
const app = express();
const router = express.Router();
const morgan = require("morgan");
const Joi = require("joi");

// GET /json_params_url mostra os parametros iniciais de cada atividade
router.get("/", (req, res) => {
    res.json([
        { "name": "resumo", "type": "text/plain" },
        { "name": "instrucoes", "type": "text/plain" }
    ]);
});

module.exports = router;