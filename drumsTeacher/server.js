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
const addActivityRoute = require("./routes/activities");
const home = require("./routes/home")



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
app.use("/", home); //Initial setup
app.post("/add", sumNumbers);


// // Rota para receber e guardar dados JSON
// app.post('/api/dados', (req, res) => {
//     const novoDado = req.body;
//     dados.push(novoDado);
//     res.status(201).json(novoDado);
// });