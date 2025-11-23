var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT
        (SELECT COUNT(idade) FROM respostas WHERE idade <= 25) as menor25,
        (SELECT COUNT(idade) FROM respostas WHERE idade > 25 and idade <= 40) as de25a40,
        (SELECT COUNT(idade) FROM respostas WHERE idade > 40) as maior40;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpi() {
    var instrucao = `
        select avg(idade) as mediaIdade from respostas;
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
    listar,
    kpi
};