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
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(mostrarkpi);
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
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
            DashboardModel.cadastrar(som, experiencia, comprar, motivo, customizar, elementos, layout, tendencia, idade)
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
    kpi
}