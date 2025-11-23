var express = require("express");
var router = express.Router();

var DashboardController = require("../controllers/DashboardController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    DashboardController.cadastrar(req, res);
});

// router.post("/obterDados", function (req, res) {
//     DashboardController.obterDados(req, res);
// });

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    DashboardController.listar(req, res);
});
module.exports = router;