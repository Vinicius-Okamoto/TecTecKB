vt_texto = [
    "A suprema arte da guerra é derrotar o inimigo sem lutar.",
    "As oportunidades multiplicam-se à medida que são agarradas.",
    "Diante de uma larga frente de batalha, procure o ponto mais fraco e, ali, ataque com a sua maior força.",
    "Todos podem ver as táticas de minhas conquistas, mas ninguém consegue discernir a estratégia que gerou as vitórias.",
    "hoje melhor que ontem, amanhã melhor que hoje.",
    "<b>Parabéns</b>, você passou por todas as frases!",
]
var rodada = 0
var pontos = 0 
function trocar() {
    DivMsg.innerHTML = vt_texto[rodada]
    rodada++
    if (rodada > 5) {
        rodada = 0
    }
    iptTexto5.focus();
}

function validar() {
    if (vt_texto[rodada - 1] == iptTexto5.value) {
        alert('Parabéns você digitou corretamente.')
        trocar()
        iptTexto5.value = ''
        pontos++
        DivMsgPontos.innerHTML = pontos
    } else {
        alert('Que pena, você digitou incorretamente, tente novamente.')
    }
    iptTexto5.focus();
}