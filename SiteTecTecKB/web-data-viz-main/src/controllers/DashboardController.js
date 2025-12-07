var DashboardModel = require("../models/DashboardModel");


function listar(req, res) {
    DashboardModel.listar().then(function(response){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(response);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function kpi(req, res) {
    DashboardModel.kpi().then(function(mostrarkpi){
        res.status(200).json(mostrarkpi);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiresp1(req, res) {
    DashboardModel.kpiresp1().then(function(mostrarkpiresp1){
        res.status(200).json(mostrarkpiresp1);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiresp2(req, res) {
    DashboardModel.kpiresp2().then(function(mostrarkpiresp2){
        res.status(200).json(mostrarkpiresp2);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiresp3(req, res) {
    DashboardModel.kpiresp3().then(function(mostrarkpiresp3){
        res.status(200).json(mostrarkpiresp3);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiresp4(req, res) {
    DashboardModel.kpiresp4().then(function(mostrarkpiresp4){
        res.status(200).json(mostrarkpiresp4);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiresp5(req, res) {
    DashboardModel.kpiresp5().then(function(mostrarkpiresp5){
        res.status(200).json(mostrarkpiresp5);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiresp6(req, res) {
    DashboardModel.kpiresp6().then(function(mostrarkpiresp6){
        res.status(200).json(mostrarkpiresp6);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}


function kpiresp7(req, res) {
    DashboardModel.kpiresp7().then(function(mostrarkpiresp7){
        res.status(200).json(mostrarkpiresp7);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiresp8(req, res) {
    DashboardModel.kpiresp8().then(function(mostrarkpiresp8){
        res.status(200).json(mostrarkpiresp8);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var idfk = req.body.idServer;
    var idade = req.body.idadeServer;
    var som = req.body.somServer;
    var experiencia = req.body.experienciaServer;
    var comprar = req.body.comprarServer;
    var motivo = req.body.motivoServer;
    var customizar = req.body.customizarServer;
    var elementos = req.body.elementosServer;
    var layout = req.body.layoutServer;
    var tendencia = req.body.tendenciaServer;
    
    if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (idfk == undefined) {
        res.status(400).send("O resultado tendencia está undefined!");
    } else if (som == undefined) {
        res.status(400).send("O resultado som está undefined!");
    } else if (experiencia == undefined) {
        res.status(400).send("O resultado experiencia está undefined!");
    } else if (comprar == undefined) {
        res.status(400).send("O resultado comprar está undefined!");
    } else if (motivo == undefined) {
        res.status(400).send("O resultado motivo está undefined!");
    } else if (customizar == undefined) {
        res.status(400).send("O resultado customizar está undefined!");
    } else if (elementos == undefined) {
        res.status(400).send("O resultado elementos está undefined!");
    } else if (layout == undefined) {
        res.status(400).send("O resultado layout está undefined!");
    } else if (tendencia == undefined) {
        res.status(400).send("O resultado tendencia está undefined!");
    } else {
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            DashboardModel.cadastrar(som, experiencia, comprar, motivo, customizar, elementos, layout, tendencia, idfk, idade)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    // DashboardModel.cadastrar(idade).then(function(resposta){
    //     res.status(200).send("Carro criado com sucesso");
    // }).catch(function(erro){
    //     res.status(500).json(erro.sqlMessage);
    // })
}

module.exports = {
    listar,
    cadastrar,
    kpi,
    kpiresp1,
    kpiresp2,
    kpiresp3,
    kpiresp4,
    kpiresp5,
    kpiresp6,
    kpiresp7,
    kpiresp8
}