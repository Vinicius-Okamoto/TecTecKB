var DashboardModel = require("../models/DashboardModel");


function listar(req, res) {
    DashboardModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var idade = req.body.idadeServer;
    var idade = req.body.somServer;
    var idade = req.body.experienciaServer;
    var idade = req.body.comprarServer;
    var idade = req.body.motivoServer;
    var idade = req.body.customizarServer;
    var idade = req.body.elementosServer;
    var idade = req.body.layoutServer;
    var idade = req.body.tendenciaServer;
    
    if (idade == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    DashboardModel.cadastrar(idade).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}