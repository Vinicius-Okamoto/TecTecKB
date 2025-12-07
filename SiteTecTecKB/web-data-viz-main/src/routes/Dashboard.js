var express = require("express");
var router = express.Router();

var DashboardController = require("../controllers/DashboardController");

router.post("/cadastrar", function (req, res) {
    DashboardController.cadastrar(req, res);
});

// router.post("/obterDados", function (req, res) {
//     DashboardController.obterDados(req, res);
// });

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    DashboardController.listar(req, res);
});

router.get("/kpi", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    DashboardController.kpi(req, res);
});

router.get("/kpiresp1", function (req, res) {
    DashboardController.kpiresp1(req, res);
});

router.get("/kpiresp2", function (req, res) {
    DashboardController.kpiresp2(req, res);
});
router.get("/kpiresp3", function (req, res) {
    DashboardController.kpiresp3(req, res);
});
router.get("/kpiresp4", function (req, res) {
    DashboardController.kpiresp4(req, res);
});
router.get("/kpiresp5", function (req, res) {
    DashboardController.kpiresp5(req, res);
});
router.get("/kpiresp6", function (req, res) {
    DashboardController.kpiresp6(req, res);
});
router.get("/kpiresp7", function (req, res) {
    DashboardController.kpiresp7(req, res);
});
router.get("/kpiresp8", function (req, res) {
    DashboardController.kpiresp8(req, res);
});

module.exports = router;