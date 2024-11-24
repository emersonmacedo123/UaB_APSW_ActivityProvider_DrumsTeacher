const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");
const app = express();
const router = express.Router();
const morgan = require("morgan");

const Joi = require("joi");

// Middlewares 
app.use(bodyParser.json()); // Para analisar o corpo das requisições JSON

// JOI Validation
const deploySchema = Joi.object({
    activityID: Joi.string().required(),
    InvenRAstdID: Joi.string().required(),
    json_params: Joi.object({
        "Analytic 1": Joi.string().optional(),
        "Analytic 2": Joi.string().optional(),
        "Analytic 3": Joi.boolean().optional(),
        "Analytic 4": Joi.number().optional(),
    }).required(),
});

// GET /deploy
//functions
const mensagemDeployGet = (req, res) => {
    res.send("Voce acessou GET do deploy. Use POST para iniciar uma nova instancia de atividade");
};

router.get("/", mensagemDeployGet);

router.post("/", (req, res) => {
    //etapa de validacao
    const { error, value } = deploySchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: `Validation Error: ${error.details[0].message}` });
    } else {
        console.log('Analytics configurado!', value);
        // Dados validados
        const { activityID } = req.body;
        // Resposta com o URL de instância
        const instanceURL = `http://localhost:5000/atividade/${activityID}`;
        res.json({ activity_url: instanceURL });
    }
})

//exemplo de dados input
// {
//     "activityID": "12345",
//     "InvenRAstdID": "98765",
//     "json_params": {
//         "Analytic 1": "Some text",
//         "Analytic 2": "http://example.com",
//         "Analytic 3": true,
//         "Analytic 4": 42
//     }
// }


module.exports = router;