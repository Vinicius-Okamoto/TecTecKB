// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    
    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

let imgtec = [
    'TecladoYudi (1).jpeg',
    'TecladoYudi (2).jpeg',
    'TecladoYudi (3).jpeg',
    'TecladoYudi (4).jpeg',
    'TecladoYudi (5).jpeg',
    'TecladoYudi (6).jpeg',
    'TecladoYudi (7).jpeg',
    'TecladoYudi (8).jpeg',
    'TecladoYudi (9).jpeg',
    'TecladoYudi (10).jpeg',
    'TecladoYudi (11).jpeg',
    'TecladoYudi (12).jpeg',
    'TecladoYudi (13).jpeg',
    'TecladoYudi (14).jpeg',
    'TecladoYudi (15).jpeg',
    'TecladoYudi (16).jpeg',
    'TecladoYudi (17).jpeg',
    'TecladoYudi (18).jpeg',
    'TecladoYudi (19).jpeg'
    ]

var indexIMG = 0

    function trocarImagem() {
        indexIMG++
        if (indexIMG >= imgtec.length) {
            indexIMG = 0
        }
        for (let index = 0; index < imgtec.length; index++) {
            if (indexIMG == index) {
                divImg.innerHTML = `<img src="assets/imgs/${imgtec[index]}" style="width: 400px;">`
                break
            }
        }
        // if (index >= imgbackground.length) {
            
        // }
        // for (let index = 0; index < imgbackground.length; index++) {
        //     if (divImg.innerHTML == `<img src="assets/imgs/${imgbackground[index]}" style="width: 400px;">`) {
                
        //         divImg.innerHTML = `<img src="assets/imgs/${imgbackground[index + 1]}" style="width: 400px;">`
        //     }
        // }
    }
// window.onload = function() {
//     for (let index = 0; index < imgbackground.length; index++) {
//         divImg.innerHTML = `<img src="assets/imgs/${imgbackground[index]}" style="width: 400px;">`
//         if (index - 1 == imgbackground.length) {
//             index = 0
//         }
//     }

    // function trocarimagem() {
        
    // }
    // setInterval(trocarimagem, 1000);
// };