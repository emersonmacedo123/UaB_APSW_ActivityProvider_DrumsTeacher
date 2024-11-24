const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");
const app = express();
const router = express.Router();
const morgan = require("morgan");

const Joi = require("joi");

let activityAnalytics = [{
    "qualAnalytics": [
        { "name": "Analytic 1", "included": false },
        { "name": "Analytic 2", "included": false }
    ],
    "quantAnalytics": [
        { "name": "Analytic 3", "included": false },
        { "name": "Analytic 4", "included": false }
    ]
}];

// Esquema de validação Joi
const analyticSchema = Joi.object({
    name: Joi.string().required(),
    included: Joi.boolean().required()
});

const schema = Joi.object({
    qualAnalytics: Joi.array().items(analyticSchema).required(),
    quantAnalytics: Joi.array().items(analyticSchema).required()
});


//funcao GET em /activityAnalytics
const activityAnalyticsGetter = (req, res) => {
    res.send(activityAnalytics)
};

router.get("/", activityAnalyticsGetter);
//funcao POST em /configURL
router.post("/", (req, res) => {
    // Validação
    const { error, value } = schema.validate(req.body);
    if (error) {
        console.log('Erro na validação:', error.details);
        res.status(400).send(`Erro na validação:`)
    } else {
        console.log('Analytics configurado!', value);
        activityAnalytics = value;
        res.status(201).json(value);
    }
})



module.exports = router;