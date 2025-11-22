var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM respostas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(som, experiencia, comprar, motivo, customizar, elementos, layout, tendencia, idade) {
    var instrucao = `
        INSERT INTO respostas (resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, idade) VALUES ('${som}', '${experiencia}', '${comprar}', '${motivo}', '${customizar}', '${elementos}', '${layout}', '${tendencia}', '${idade}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};