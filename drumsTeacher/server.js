/*
    Universidade Aberta de Portugal
    Mestrado em Engenharia Informática e Tecnologia Web
    Arquitetura e Padroes de Software - 2024
    Estudante: Emerson Macedo
*/

//Configuracoes iniciais
const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");
require("dotenv").config(); // Carregar variáveis de ambiente do arquivo .env
const router = express.Router();


const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || "http://localhost:5000";
app.use(express.json());


//Inicializacao do servidor
app.listen(PORT, () => {
    console.log(`Activity Provider is running on ${BASE_URL}`);
    console.log("Rotas Registradas:");
    console.log(listEndpoints(app)); // Listar todas as rotas registradas
});

//Adicionando rotas
const home = require("./routes/home")
const addActivityRoute = require("./routes/activities");
const paramsUrl = require("./routes/json_params_url");
const analyticsList = require("./routes/analyticsList");
const configUrl = require("./routes/configUrl");
const activityAnalytics = require("./routes/activityAnalytics");



//Middlewares iniciais de testes
//Saudacoes - initial GET
const sayHi = (req, res) => {
    res.send("Hi");
};
//somar numers enviados - initial POST
const sumNumbers = (req, res) => {
    const { a, b } = req.body;
    res.send(`The new sum is: ${a + b}`);
}

//Rotas registradas
// app.use("/config", configRoutes); // Rotas de configuração
app.use("/", home); //Initial setup for testing
app.use("/activities", addActivityRoute); //para ver as atividades registradas  e adicionar
app.use("/configuracao-atividade", configUrl) //para configurar uma atividade
app.use("/json-params-atividade", paramsUrl); //para ver os parametros que cada atividade deve ter
app.use("/lista-analytics-atividade", analyticsList); //para ver a lista de analytics disponiveis
app.use("/analytics-atividade", activityAnalytics) // para ou alterar ver os items analisados na atividade


//anotacoes
// "name": "Atividade interessante",                                    DONE! (lista e adiciona atividade)
// "config_url": "http://<domínio>/configuracao-atividade.html",
// "json_params_url": "http:// <domínio>/json-params-atividade",        DONE!
// "user_url": "http://<domínio>/deploy-atividade",
// "analytics_url": "http://<domínio>/analytics-atividade",
// "analytics_list_url": "http://<domínio>/lista-analytics-atividade"   DONE!