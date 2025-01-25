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

// Cria uma instância do Express
const app = express();

//set up de porta e base_url
const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

//Middlewares
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
const deployAtividade = require("./routes/deploy");

//Rotas registradas
/// @brief Rota inicial para teste
app.use("/", home);
/// @brief Rota ver atividades registradas e adicionar atividades
app.use("/activities", addActivityRoute);
/// @brief Rota para configurar uma atividade
app.use("/configuracao-atividade", configUrl);
/// @brief Rota para ver os parametros que cada atividade deve ter
app.use("/json-params-atividade", paramsUrl);
/// @brief Rota para ver a lista de analytics disponiveis
app.use("/lista-analytics-atividade", analyticsList);
/// @brief Rota para ver ou alterar os items analisados na atividade
app.use("/analytics-atividade", activityAnalytics);
/// @brief Rota para dar deploy em uma atividade
app.use("/deployAtividade", deployAtividade);
/// @brief Rota de configuracao
// app.use("/config", configRoutes);

//anotacoes
// "name": "Atividade interessante",                                    DONE! (lista e adiciona atividade)
// "config_url": "http://<domínio>/configuracao-atividade.html",        DONE!
// "json_params_url": "http:// <domínio>/json-params-atividade",        DONE!
// "user_url": "http://<domínio>/deploy-atividade",                     ongoing
// "analytics_url": "http://<domínio>/analytics-atividade",             DONE!
// "analytics_list_url": "http://<domínio>/lista-analytics-atividade"   DONE!