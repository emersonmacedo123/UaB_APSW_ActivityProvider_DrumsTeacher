const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");
const app = express();
const router = express.Router();
const morgan = require("morgan");


let analyticsListData = [{
        "qualAnalytics": [
            { "name": "Analytic 1", "type": "text/plain" },
            { "name": "Analytic 2", "type": "URL" }
        ],
        "quantAnalytics": [
            { "name": "Analytic 3", "type": "boolean" },
            { "name": "Analytic 4", "type": "integer" }
        ]
    }

]

//funcao GET em /activties_list_url
const analyticsListGetter = (req, res) => {
    res.send(analyticsListData)
};

router.get("/", analyticsListGetter);


module.exports = router;