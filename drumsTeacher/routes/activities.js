const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");
const app = express();

//guardar nova atividade
let atividadesRegistradas = [];

app.get("/", atividadesRegistradas)

// Rota para receber e guardar dados JSON
// app.post('/api/dados', (req, res) => {
//     const novoDado = req.body;
//     dados.push(novoDado);
//     res.status(201).json(novoDado);
// });