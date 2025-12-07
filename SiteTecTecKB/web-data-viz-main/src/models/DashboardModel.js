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

function kpiresp1() {
    var instrucao = `
SELECT resposta1, COUNT(resposta1) AS total_ocorrencias
FROM respostas
GROUP BY resposta1
ORDER BY total_ocorrencias DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiresp2() {
    var instrucao = `
SELECT resposta2, COUNT(resposta2) AS total_ocorrencias
FROM respostas
GROUP BY resposta2
ORDER BY total_ocorrencias DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiresp3() {
    var instrucao = `
SELECT resposta3, COUNT(resposta3) AS total_ocorrencias
FROM respostas
GROUP BY resposta3
ORDER BY total_ocorrencias DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiresp4() {
    var instrucao = `
SELECT resposta4, COUNT(resposta4) AS total_ocorrencias
FROM respostas
GROUP BY resposta4
ORDER BY total_ocorrencias DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiresp5() {
    var instrucao = `
SELECT resposta5, COUNT(resposta5) AS total_ocorrencias
FROM respostas
GROUP BY resposta5
ORDER BY total_ocorrencias DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiresp6() {
    var instrucao = `
SELECT resposta6, COUNT(resposta6) AS total_ocorrencias
FROM respostas
GROUP BY resposta6
ORDER BY total_ocorrencias DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiresp7() {
    var instrucao = `
SELECT resposta7, COUNT(resposta7) AS total_ocorrencias
FROM respostas
GROUP BY resposta7
ORDER BY total_ocorrencias DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiresp8() {
    var instrucao = `
SELECT resposta8, COUNT(resposta8) AS total_ocorrencias
FROM respostas
GROUP BY resposta8
ORDER BY total_ocorrencias DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(som, experiencia, comprar, motivo, customizar, elementos, layout, tendencia, idfk, idade) {
    var instrucao = `
        INSERT INTO respostas (resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, usuarioId, idade) VALUES ('${som}', '${experiencia}', '${comprar}', '${motivo}', '${customizar}', '${elementos}', '${layout}', '${tendencia}', '${idfk}', '${idade}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    kpi,
    kpiresp1,
    kpiresp2,
    kpiresp3,
    kpiresp4,
    kpiresp5,
    kpiresp6,
    kpiresp7,
    kpiresp8
};