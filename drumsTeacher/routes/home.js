const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");
const app = express();
const router = express.Router();
const morgan = require("morgan");


// Middlewares
// router.use(cors({ origin: "https://invenira-platform.com" })); // Restrição de domínio
// router.use(morgan("combined")); // Logs detalhados

//functions
const Initial_Greetings = (req, res) => {
    res.send("Olá. O server está funcionando. :)");
};


//call GET
router.get("/", Initial_Greetings)

module.exports = router;