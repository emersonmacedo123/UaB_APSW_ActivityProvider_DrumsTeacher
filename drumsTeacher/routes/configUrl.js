const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");
const app = express();
const router = express.Router();
const morgan = require("morgan");
const Joi = require("joi");

// Middlewares 
app.use(bodyParser.json()); // Para analisar o corpo das requisições JSON

//guardar params para a atividade
let activityConfigParams = [{
    resumo: "Inserir aqui um resumo da atividade",
    instrucoes: "Inserir aqui Instrucoes da atividade"
}];

// Esquema de validação JOI
const schema = Joi.object({
    resumo: Joi.string().required(),
    instrucoes: Joi.string().required(),
});

//funcao GET em /configURL
const getActivityParams = (req, res) => {
    res.send(activityConfigParams);
};

router.get("/", getActivityParams)

//funcao POST em /configURL
router.post("/", (req, res) => {
    // Validação
    const { error, value } = schema.validate(req.body);
    if (error) {
        console.log('Erro na validação:', error.details);
        res.status(400).send(`Erro na validação:`)
    } else {
        console.log('Dados válidos:', value);
        activityConfigParams = value;
        res.status(201).json(value);
    }
})



module.exports = router;