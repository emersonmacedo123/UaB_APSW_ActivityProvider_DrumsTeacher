const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");
const app = express();
const router = express.Router();
const morgan = require("morgan");
const Joi = require("joi");


//guardar atividades
let atividadesRegistradas = [{
    "name": "Atividade interessante",
    "config_url": "http://<domínio>/configuracao-atividade.html",
    "json_params_url": "http:// <domínio>/json-params-atividade",
    "user_url": "http://<domínio>/deploy-atividade",
    "analytics_url": "http://<domínio>/analytics-atividade",
    "analytics_list_url": "http://<domínio>/lista-analytics-atividade"
}];

// Esquema de validação JOI
const schema = Joi.object({
    name: Joi.string().required(),
    config_url: Joi.string().uri().required(),
    json_params_url: Joi.string().uri().required(),
    user_url: Joi.string().uri().required(),
    analytics_url: Joi.string().uri().required(),
    analytics_list_url: Joi.string().uri().required()
});

// Dados a serem validados
const data = {
    name: "Atividade interessante",
    config_url: "http://example.com/configuracao-atividade.html",
    json_params_url: "http://example.com/json-params-atividade",
    user_url: "http://example.com/deploy-atividade",
    analytics_url: "http://example.com/analytics-atividade",
    analytics_list_url: "http://example.com/lista-analytics-atividade"
};



//funcao GET em /activities
const getActivities = (req, res) => {
    res.send(atividadesRegistradas);
};

router.get("/", getActivities)

//funcao Add activities (POST)
router.post("/", (req, res) => {
    // Validação
    const { error, value } = schema.validate(data);
    if (error) {
        console.log('Erro na validação:', error.details);
        res.status(400).send(`Erro na validação:`)
    } else {
        console.log('Dados válidos:', value);
        atividadesRegistradas.push(value);
        res.status(201).json(value);
    }
})



module.exports = router;