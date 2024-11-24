const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");
const app = express();
const router = express.Router();
const morgan = require("morgan");
const Joi = require("joi");

// GET /json_params_url mostra os parametros iniciais de cada atividade
router.get("/json_params_url", (req, res) => {
    res.json([
        { name: "nivel_stock_inicial", type: "integer" },
        { name: "objetivo_vendas", type: "integer" },
        { name: "duracao_campanha", type: "integer" },
        { name: "descricao_cenario", type: "text/plain" },
    ]);
});

module.exports = router;