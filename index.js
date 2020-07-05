
function testeLogin() {
    if (sessionStorage.nome != "" & sessionStorage.senha != "") {
        var node = document.getElementById("apagar");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        let pai = document.getElementById("Novonome");
        var a = document.createElement('a');
        a.classList.add('test');
        pai.appendChild(a);
        a.href = "#";
        var div = document.createElement('div');
        div.classList.add('header-btn');
        div.innerHTML = sessionStorage.nome;
        a.appendChild(div);
        var ul = document.createElement('ul');
        ul.classList.add('dropdown');
        pai.appendChild(ul);
        var li1 = document.createElement('li');
        ul.appendChild(li1);
        var a1 = document.createElement('a');
        li1.appendChild(a1);
        a1.innerHTML = ("Meu Perfil");
        a1.href = "#";
        var li2 = document.createElement('li');
        ul.appendChild(li2);
        var a2 = document.createElement('a');
        li2.appendChild(a2);
        a2.innerHTML = ("Meu Calendario");
        a2.href = "#";
        var li3 = document.createElement('li');
        ul.appendChild(li3);
        var a3 = document.createElement('a');
        li3.appendChild(a3);
        a3.innerHTML = ("Configurações");
        a3.href = "#";
        var li4 = document.createElement('li');
        ul.appendChild(li4);
        var a4 = document.createElement('a');
        li4.appendChild(a4);
        a4.innerHTML = ("Logout");
        a4.href = "#";
        a4.setAttribute("onclick", "logout();");

    }
}

function logout() {
    sessionStorage.clear();
    redirecionar();
}

function redirecionar() {
    window.location.replace("index.html");
}

var click = -1;
function salvarMudanças() {
    click += 1;
    let nome = document.getElementById("inserirTituloEvento");
    let conteudo = document.getElementById("inserirConteudoEvnt");
    let dia = document.getElementById("dia");
    let mes = document.getElementById("mes");
    let ano = document.getElementById("ano");
    sessionStorage.setItem('nome', inserirTituloEvento.value);
    sessionStorage.setItem('conteudo', inserirConteudoEvnt.value);
    sessionStorage.setItem('dia', dia.value);
    sessionStorage.setItem('mes', mes.value);
    sessionStorage.setItem('ano', ano.value);
    let Festa = document.getElementById("box-1");

    if (click % 5 == 0) {
        let div = document.getElementById("principal");
        var divtop = document.createElement('div');
        divtop.classList.add('row');
        divtop.setAttribute("id", "divtop");
        div.appendChild(divtop);
        var div1 = document.createElement('div');
        div1.classList.add('card');
        div1.id = "Card";
        divtop.appendChild(div1);
        var divimagem = document.createElement('div');
        divimagem.classList.add('card-imagem');
        div1.appendChild(divimagem);
        var div2 = document.createElement('div');
        div2.classList.add('card-texto');
        div1.appendChild(div2);
        var spandata = document.createElement('span');
        spandata.classList.add('date');
        spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
        div2.appendChild(spandata);
        var titulo = document.createElement('h2');
        titulo.innerHTML = sessionStorage.nome;
        div2.appendChild(titulo);
        var p = document.createElement('p');
        p.innerHTML = sessionStorage.conteudo;
        div2.appendChild(p)
        var div3 = document.createElement('div');
        div3.classList.add('card-status' + click);
        div1.appendChild(div3);
        var divstatus = document.createElement('div');
        divstatus.classList.add('status' + click);
        div3.appendChild(divstatus);
        var divvalor = document.createElement('div');
        divvalor.classList.add('valor');
        divvalor.innerHTML = "4";
        divstatus.appendChild(divvalor);
        var divtipo = document.createElement('div');
        divtipo.classList.add('tipo');
        divtipo.innerHTML = "lidos";
        divstatus.appendChild(divtipo);
        var divstatus1 = document.createElement('div');
        divstatus1.classList.add('status' + click);
        div3.appendChild(divstatus1);
        var divvalor1 = document.createElement('div');
        divvalor1.classList.add('valor');
        divvalor1.innerHTML = "3464";
        divstatus1.appendChild(divvalor1);
        var divtipo1 = document.createElement('div');
        divtipo1.classList.add('tipo');
        divtipo1.innerHTML = "Visualizações";
        divstatus1.appendChild(divtipo1);
        var divstatus2 = document.createElement('div');
        divstatus2.classList.add('status' + click);
        div3.appendChild(divstatus2);
        var divvalor2 = document.createElement('div');
        divvalor2.classList.add('valor');
        divvalor2.innerHTML = "456";
        divstatus2.appendChild(divvalor2);
        var divtipo2 = document.createElement('div');
        divtipo2.classList.add('tipo');
        divtipo2.innerHTML = "Comentarios";
        divstatus2.appendChild(divtipo2);
        $('.card-status' + click).ready(function () {
            var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
            var rand = back[Math.floor(Math.random() * back.length)];
            $('.card-status' + click).css('background', rand);
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('grid-area', "status");
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('display', "grid");
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('grid-template-rows', "1fr");
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('border-bottom-left-radius', "15px");
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('border-bottom-right-radius', "15px");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('display', "flex");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('align-items', "center");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('justify-content', "center");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('flex-direction', "column");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('padding', "10px");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('color', "white");
        })
        if (Festa.checked == true) {
            cardFestas();
        }
        let Show = document.getElementById("box-2");
        if (Show.checked == true) {
            cardShow();
        }
        let Karaoke = document.getElementById("box-3");
        if (Karaoke.checked == true) {
            cardKaraoke();
        }
        let Jogos = document.getElementById("box-4");
        if (Jogos.checked == true) {
            cardJogos();
        }
        let Educacao = document.getElementById("box-5");
        if (Educacao.checked == true) {
            cardEducacao();
        }
        let Ciencia = document.getElementById("box-6");
        if (Ciencia.checked == true) {
            cardCiencia();
        }
        let Tecnologia = document.getElementById("box-7");
        if (Tecnologia.checked == true) {
            cardTecnologia();
        }
        let Saude = document.getElementById("box-8");
        if (Saude.checked == true) {
            cardSaude();
        }
        let Esportes = document.getElementById("box-9");
        if (Esportes.checked == true) {
            cardEsporte();
        }
        let Financeiro = document.getElementById("box-10");
        if (Financeiro.checked == true) {
            cardFinanceiro();
        }
    }
    else
    {
        let div = document.getElementById("divtop");
        var div1 = document.createElement('div');
        div1.classList.add('card');
        div1.id = "Card";
        div.appendChild(div1);
        var divimagem = document.createElement('div');
        divimagem.classList.add('card-imagem');
        div1.appendChild(divimagem);
        var div2 = document.createElement('div');
        div2.classList.add('card-texto');
        div1.appendChild(div2);
        var spandata = document.createElement('span');
        spandata.classList.add('date');
        spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
        div2.appendChild(spandata);
        var titulo = document.createElement('h2');
        titulo.innerHTML = sessionStorage.nome;
        div2.appendChild(titulo);
        var p = document.createElement('p');
        p.innerHTML = sessionStorage.conteudo;
        div2.appendChild(p)
        var div3 = document.createElement('div');
        div3.classList.add('card-status' + click);
        div1.appendChild(div3);
        var divstatus = document.createElement('div');
        divstatus.classList.add('status' + click);
        div3.appendChild(divstatus);
        var divvalor = document.createElement('div');
        divvalor.classList.add('valor');
        divvalor.innerHTML = "4";
        divstatus.appendChild(divvalor);
        var divtipo = document.createElement('div');
        divtipo.classList.add('tipo');
        divtipo.innerHTML = "lidos";
        divstatus.appendChild(divtipo);
        var divstatus1 = document.createElement('div');
        divstatus1.classList.add('status' + click);
        div3.appendChild(divstatus1);
        var divvalor1 = document.createElement('div');
        divvalor1.classList.add('valor');
        divvalor1.innerHTML = "3464";
        divstatus1.appendChild(divvalor1);
        var divtipo1 = document.createElement('div');
        divtipo1.classList.add('tipo');
        divtipo1.innerHTML = "Visualizações";
        divstatus1.appendChild(divtipo1);
        var divstatus2 = document.createElement('div');
        divstatus2.classList.add('status' + click);
        div3.appendChild(divstatus2);
        var divvalor2 = document.createElement('div');
        divvalor2.classList.add('valor');
        divvalor2.innerHTML = "456";
        divstatus2.appendChild(divvalor2);
        var divtipo2 = document.createElement('div');
        divtipo2.classList.add('tipo');
        divtipo2.innerHTML = "Comentarios";
        divstatus2.appendChild(divtipo2);
        $('.card-status' + click).ready(function () {
            var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
            var rand = back[Math.floor(Math.random() * back.length)];
            $('.card-status' + click).css('background', rand);
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('grid-area', "status");
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('display', "grid");
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('grid-template-rows', "1fr");
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('border-bottom-left-radius', "15px");
        })
        $('.card-status' + click).ready(function () {
            $('.card-status' + click).css('border-bottom-right-radius', "15px");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('display', "flex");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('align-items', "center");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('justify-content', "center");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('flex-direction', "column");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('padding', "10px");
        })
        $('.status' + click).ready(function () {
            $('.status' + click).css('color', "white");
        })
        if (Festa.checked == true) {
            cardFestas();
        }
        let Show = document.getElementById("box-2");
        if (Show.checked == true) {
            cardShow();
        }
        let Karaoke = document.getElementById("box-3");
        if (Karaoke.checked == true) {
            cardKaraoke();
        }
        let Jogos = document.getElementById("box-4");
        if (Jogos.checked == true) {
            cardJogos();
        }
        let Educacao = document.getElementById("box-5");
        if (Educacao.checked == true) {
            cardEducacao();
        }
        let Ciencia = document.getElementById("box-6");
        if (Ciencia.checked == true) {
            cardCiencia();
        }
        let Tecnologia = document.getElementById("box-7");
        if (Tecnologia.checked == true) {
            cardTecnologia();
        }
        let Saude = document.getElementById("box-8");
        if (Saude.checked == true) {
            cardSaude();
        }
        let Esportes = document.getElementById("box-9");
        if (Esportes.checked == true) {
            cardEsporte();
        }
        let Financeiro = document.getElementById("box-10");
        if (Financeiro.checked == true) {
            cardFinanceiro();
        }
    }
}

function cardFestas() {
    let div = document.getElementById("Festas");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id", "divtop");
    div.appendChild(divtop);
    var div1 = document.createElement('div');
    div1.classList.add('card');
    div1.id = "Card";
    divtop.appendChild(div1);
    var divimagem = document.createElement('div');
    divimagem.classList.add('card-imagem');
    div1.appendChild(divimagem);
    var div2 = document.createElement('div');
    div2.classList.add('card-texto');
    div1.appendChild(div2);
    var spandata = document.createElement('span');
    spandata.classList.add('date');
    spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status' + click);
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status' + click);
    div3.appendChild(divstatus);
    var divvalor = document.createElement('div');
    divvalor.classList.add('valor');
    divvalor.innerHTML = "4";
    divstatus.appendChild(divvalor);
    var divtipo = document.createElement('div');
    divtipo.classList.add('tipo');
    divtipo.innerHTML = "lidos";
    divstatus.appendChild(divtipo);
    var divstatus1 = document.createElement('div');
    divstatus1.classList.add('status' + click);
    div3.appendChild(divstatus1);
    var divvalor1 = document.createElement('div');
    divvalor1.classList.add('valor');
    divvalor1.innerHTML = "3464";
    divstatus1.appendChild(divvalor1);
    var divtipo1 = document.createElement('div');
    divtipo1.classList.add('tipo');
    divtipo1.innerHTML = "Visualizações";
    divstatus1.appendChild(divtipo1);
    var divstatus2 = document.createElement('div');
    divstatus2.classList.add('status' + click);
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
    $('.card-status' + click).ready(function () {
        var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.card-status' + click).css('background', rand);
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-area', "status");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('display', "grid");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-rows', "1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-left-radius', "15px");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-right-radius', "15px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('display', "flex");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('align-items', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('justify-content', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('flex-direction', "column");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('padding', "10px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('color', "white");
    })
}

function cardShow() {
    let div = document.getElementById("Show");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id", "divtop");
    div.appendChild(divtop);
    var div1 = document.createElement('div');
    div1.classList.add('card');
    div1.id = "Card";
    divtop.appendChild(div1);
    var divimagem = document.createElement('div');
    divimagem.classList.add('card-imagem');
    div1.appendChild(divimagem);
    var div2 = document.createElement('div');
    div2.classList.add('card-texto');
    div1.appendChild(div2);
    var spandata = document.createElement('span');
    spandata.classList.add('date');
    spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status' + click);
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status' + click);
    div3.appendChild(divstatus);
    var divvalor = document.createElement('div');
    divvalor.classList.add('valor');
    divvalor.innerHTML = "4";
    divstatus.appendChild(divvalor);
    var divtipo = document.createElement('div');
    divtipo.classList.add('tipo');
    divtipo.innerHTML = "lidos";
    divstatus.appendChild(divtipo);
    var divstatus1 = document.createElement('div');
    divstatus1.classList.add('status' + click);
    div3.appendChild(divstatus1);
    var divvalor1 = document.createElement('div');
    divvalor1.classList.add('valor');
    divvalor1.innerHTML = "3464";
    divstatus1.appendChild(divvalor1);
    var divtipo1 = document.createElement('div');
    divtipo1.classList.add('tipo');
    divtipo1.innerHTML = "Visualizações";
    divstatus1.appendChild(divtipo1);
    var divstatus2 = document.createElement('div');
    divstatus2.classList.add('status' + click);
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
    $('.card-status' + click).ready(function () {
        var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.card-status' + click).css('background', rand);
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-area', "status");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('display', "grid");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-rows', "1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-left-radius', "15px");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-right-radius', "15px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('display', "flex");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('align-items', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('justify-content', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('flex-direction', "column");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('padding', "10px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('color', "white");
    })
} 

function cardKaraoke() {
    let div = document.getElementById("Karaoke");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id", "divtop");
    div.appendChild(divtop);
    var div1 = document.createElement('div');
    div1.classList.add('card');
    div1.id = "Card";
    divtop.appendChild(div1);
    var divimagem = document.createElement('div');
    divimagem.classList.add('card-imagem');
    div1.appendChild(divimagem);
    var div2 = document.createElement('div');
    div2.classList.add('card-texto');
    div1.appendChild(div2);
    var spandata = document.createElement('span');
    spandata.classList.add('date');
    spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status' + click);
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status' + click);
    div3.appendChild(divstatus);
    var divvalor = document.createElement('div');
    divvalor.classList.add('valor');
    divvalor.innerHTML = "4";
    divstatus.appendChild(divvalor);
    var divtipo = document.createElement('div');
    divtipo.classList.add('tipo');
    divtipo.innerHTML = "lidos";
    divstatus.appendChild(divtipo);
    var divstatus1 = document.createElement('div');
    divstatus1.classList.add('status' + click);
    div3.appendChild(divstatus1);
    var divvalor1 = document.createElement('div');
    divvalor1.classList.add('valor');
    divvalor1.innerHTML = "3464";
    divstatus1.appendChild(divvalor1);
    var divtipo1 = document.createElement('div');
    divtipo1.classList.add('tipo');
    divtipo1.innerHTML = "Visualizações";
    divstatus1.appendChild(divtipo1);
    var divstatus2 = document.createElement('div');
    divstatus2.classList.add('status' + click);
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
    $('.card-status' + click).ready(function () {
        var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.card-status' + click).css('background', rand);
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-area', "status");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('display', "grid");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-rows', "1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-left-radius', "15px");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-right-radius', "15px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('display', "flex");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('align-items', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('justify-content', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('flex-direction', "column");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('padding', "10px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('color', "white");
    })
}

function cardJogos() {
    let div = document.getElementById("Jogos");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id", "divtop");
    div.appendChild(divtop);
    var div1 = document.createElement('div');
    div1.classList.add('card');
    div1.id = "Card";
    divtop.appendChild(div1);
    var divimagem = document.createElement('div');
    divimagem.classList.add('card-imagem');
    div1.appendChild(divimagem);
    var div2 = document.createElement('div');
    div2.classList.add('card-texto');
    div1.appendChild(div2);
    var spandata = document.createElement('span');
    spandata.classList.add('date');
    spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status' + click);
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status' + click);
    div3.appendChild(divstatus);
    var divvalor = document.createElement('div');
    divvalor.classList.add('valor');
    divvalor.innerHTML = "4";
    divstatus.appendChild(divvalor);
    var divtipo = document.createElement('div');
    divtipo.classList.add('tipo');
    divtipo.innerHTML = "lidos";
    divstatus.appendChild(divtipo);
    var divstatus1 = document.createElement('div');
    divstatus1.classList.add('status' + click);
    div3.appendChild(divstatus1);
    var divvalor1 = document.createElement('div');
    divvalor1.classList.add('valor');
    divvalor1.innerHTML = "3464";
    divstatus1.appendChild(divvalor1);
    var divtipo1 = document.createElement('div');
    divtipo1.classList.add('tipo');
    divtipo1.innerHTML = "Visualizações";
    divstatus1.appendChild(divtipo1);
    var divstatus2 = document.createElement('div');
    divstatus2.classList.add('status' + click);
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
    $('.card-status' + click).ready(function () {
        var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.card-status' + click).css('background', rand);
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-area', "status");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('display', "grid");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-rows', "1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-left-radius', "15px");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-right-radius', "15px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('display', "flex");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('align-items', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('justify-content', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('flex-direction', "column");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('padding', "10px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('color', "white");
    })

}

function cardEducacao() {
    let div = document.getElementById("Educacao");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id", "divtop");
    div.appendChild(divtop);
    var div1 = document.createElement('div');
    div1.classList.add('card');
    div1.id = "Card";
    divtop.appendChild(div1);
    var divimagem = document.createElement('div');
    divimagem.classList.add('card-imagem');
    div1.appendChild(divimagem);
    var div2 = document.createElement('div');
    div2.classList.add('card-texto');
    div1.appendChild(div2);
    var spandata = document.createElement('span');
    spandata.classList.add('date');
    spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status' + click);
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status' + click);
    div3.appendChild(divstatus);
    var divvalor = document.createElement('div');
    divvalor.classList.add('valor');
    divvalor.innerHTML = "4";
    divstatus.appendChild(divvalor);
    var divtipo = document.createElement('div');
    divtipo.classList.add('tipo');
    divtipo.innerHTML = "lidos";
    divstatus.appendChild(divtipo);
    var divstatus1 = document.createElement('div');
    divstatus1.classList.add('status' + click);
    div3.appendChild(divstatus1);
    var divvalor1 = document.createElement('div');
    divvalor1.classList.add('valor');
    divvalor1.innerHTML = "3464";
    divstatus1.appendChild(divvalor1);
    var divtipo1 = document.createElement('div');
    divtipo1.classList.add('tipo');
    divtipo1.innerHTML = "Visualizações";
    divstatus1.appendChild(divtipo1);
    var divstatus2 = document.createElement('div');
    divstatus2.classList.add('status' + click);
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
    $('.card-status' + click).ready(function () {
        var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.card-status' + click).css('background', rand);
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-area', "status");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('display', "grid");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-rows', "1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-left-radius', "15px");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-right-radius', "15px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('display', "flex");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('align-items', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('justify-content', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('flex-direction', "column");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('padding', "10px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('color', "white");
    })

}

function cardCiencia() {
    let div = document.getElementById("Ciencia");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id", "divtop");
    div.appendChild(divtop);
    var div1 = document.createElement('div');
    div1.classList.add('card');
    div1.id = "Card";
    divtop.appendChild(div1);
    var divimagem = document.createElement('div');
    divimagem.classList.add('card-imagem');
    div1.appendChild(divimagem);
    var div2 = document.createElement('div');
    div2.classList.add('card-texto');
    div1.appendChild(div2);
    var spandata = document.createElement('span');
    spandata.classList.add('date');
    spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status' + click);
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status' + click);
    div3.appendChild(divstatus);
    var divvalor = document.createElement('div');
    divvalor.classList.add('valor');
    divvalor.innerHTML = "4";
    divstatus.appendChild(divvalor);
    var divtipo = document.createElement('div');
    divtipo.classList.add('tipo');
    divtipo.innerHTML = "lidos";
    divstatus.appendChild(divtipo);
    var divstatus1 = document.createElement('div');
    divstatus1.classList.add('status' + click);
    div3.appendChild(divstatus1);
    var divvalor1 = document.createElement('div');
    divvalor1.classList.add('valor');
    divvalor1.innerHTML = "3464";
    divstatus1.appendChild(divvalor1);
    var divtipo1 = document.createElement('div');
    divtipo1.classList.add('tipo');
    divtipo1.innerHTML = "Visualizações";
    divstatus1.appendChild(divtipo1);
    var divstatus2 = document.createElement('div');
    divstatus2.classList.add('status' + click);
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
    $('.card-status' + click).ready(function () {
        var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.card-status' + click).css('background', rand);
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-area', "status");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('display', "grid");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-rows', "1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-left-radius', "15px");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-right-radius', "15px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('display', "flex");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('align-items', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('justify-content', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('flex-direction', "column");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('padding', "10px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('color', "white");
    })

}

function cardTecnologia() {
    let div = document.getElementById("Tecnologia");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id", "divtop");
    div.appendChild(divtop);
    var div1 = document.createElement('div');
    div1.classList.add('card');
    div1.id = "Card";
    divtop.appendChild(div1);
    var divimagem = document.createElement('div');
    divimagem.classList.add('card-imagem');
    div1.appendChild(divimagem);
    var div2 = document.createElement('div');
    div2.classList.add('card-texto');
    div1.appendChild(div2);
    var spandata = document.createElement('span');
    spandata.classList.add('date');
    spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status' + click);
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status' + click);
    div3.appendChild(divstatus);
    var divvalor = document.createElement('div');
    divvalor.classList.add('valor');
    divvalor.innerHTML = "4";
    divstatus.appendChild(divvalor);
    var divtipo = document.createElement('div');
    divtipo.classList.add('tipo');
    divtipo.innerHTML = "lidos";
    divstatus.appendChild(divtipo);
    var divstatus1 = document.createElement('div');
    divstatus1.classList.add('status' + click);
    div3.appendChild(divstatus1);
    var divvalor1 = document.createElement('div');
    divvalor1.classList.add('valor');
    divvalor1.innerHTML = "3464";
    divstatus1.appendChild(divvalor1);
    var divtipo1 = document.createElement('div');
    divtipo1.classList.add('tipo');
    divtipo1.innerHTML = "Visualizações";
    divstatus1.appendChild(divtipo1);
    var divstatus2 = document.createElement('div');
    divstatus2.classList.add('status' + click);
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
    $('.card-status' + click).ready(function () {
        var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.card-status' + click).css('background', rand);
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-area', "status");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('display', "grid");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-rows', "1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-left-radius', "15px");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-right-radius', "15px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('display', "flex");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('align-items', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('justify-content', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('flex-direction', "column");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('padding', "10px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('color', "white");
    })

}

function cardSaude() {
    let div = document.getElementById("Saude");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id", "divtop");
    div.appendChild(divtop);
    var div1 = document.createElement('div');
    div1.classList.add('card');
    div1.id = "Card";
    divtop.appendChild(div1);
    var divimagem = document.createElement('div');
    divimagem.classList.add('card-imagem');
    div1.appendChild(divimagem);
    var div2 = document.createElement('div');
    div2.classList.add('card-texto');
    div1.appendChild(div2);
    var spandata = document.createElement('span');
    spandata.classList.add('date');
    spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status' + click);
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status' + click);
    div3.appendChild(divstatus);
    var divvalor = document.createElement('div');
    divvalor.classList.add('valor');
    divvalor.innerHTML = "4";
    divstatus.appendChild(divvalor);
    var divtipo = document.createElement('div');
    divtipo.classList.add('tipo');
    divtipo.innerHTML = "lidos";
    divstatus.appendChild(divtipo);
    var divstatus1 = document.createElement('div');
    divstatus1.classList.add('status' + click);
    div3.appendChild(divstatus1);
    var divvalor1 = document.createElement('div');
    divvalor1.classList.add('valor');
    divvalor1.innerHTML = "3464";
    divstatus1.appendChild(divvalor1);
    var divtipo1 = document.createElement('div');
    divtipo1.classList.add('tipo');
    divtipo1.innerHTML = "Visualizações";
    divstatus1.appendChild(divtipo1);
    var divstatus2 = document.createElement('div');
    divstatus2.classList.add('status' + click);
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
    $('.card-status' + click).ready(function () {
        var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.card-status' + click).css('background', rand);
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-area', "status");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('display', "grid");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-rows', "1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-left-radius', "15px");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-right-radius', "15px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('display', "flex");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('align-items', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('justify-content', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('flex-direction', "column");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('padding', "10px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('color', "white");
    })

}

function cardEsporte() {
    let div = document.getElementById("Esportes");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id", "divtop");
    div.appendChild(divtop);
    var div1 = document.createElement('div');
    div1.classList.add('card');
    div1.id = "Card";
    divtop.appendChild(div1);
    var divimagem = document.createElement('div');
    divimagem.classList.add('card-imagem');
    div1.appendChild(divimagem);
    var div2 = document.createElement('div');
    div2.classList.add('card-texto');
    div1.appendChild(div2);
    var spandata = document.createElement('span');
    spandata.classList.add('date');
    spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status' + click);
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status' + click);
    div3.appendChild(divstatus);
    var divvalor = document.createElement('div');
    divvalor.classList.add('valor');
    divvalor.innerHTML = "4";
    divstatus.appendChild(divvalor);
    var divtipo = document.createElement('div');
    divtipo.classList.add('tipo');
    divtipo.innerHTML = "lidos";
    divstatus.appendChild(divtipo);
    var divstatus1 = document.createElement('div');
    divstatus1.classList.add('status' + click);
    div3.appendChild(divstatus1);
    var divvalor1 = document.createElement('div');
    divvalor1.classList.add('valor');
    divvalor1.innerHTML = "3464";
    divstatus1.appendChild(divvalor1);
    var divtipo1 = document.createElement('div');
    divtipo1.classList.add('tipo');
    divtipo1.innerHTML = "Visualizações";
    divstatus1.appendChild(divtipo1);
    var divstatus2 = document.createElement('div');
    divstatus2.classList.add('status' + click);
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
    $('.card-status' + click).ready(function () {
        var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.card-status' + click).css('background', rand);
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-area', "status");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('display', "grid");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-rows', "1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-left-radius', "15px");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-right-radius', "15px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('display', "flex");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('align-items', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('justify-content', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('flex-direction', "column");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('padding', "10px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('color', "white");
    })

}

function cardFinanceiro() {
    let div = document.getElementById("Financeiro");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id", "divtop");
    div.appendChild(divtop);
    var div1 = document.createElement('div');
    div1.classList.add('card');
    div1.id = "Card";
    divtop.appendChild(div1);
    var divimagem = document.createElement('div');
    divimagem.classList.add('card-imagem');
    div1.appendChild(divimagem);
    var div2 = document.createElement('div');
    div2.classList.add('card-texto');
    div1.appendChild(div2);
    var spandata = document.createElement('span');
    spandata.classList.add('date');
    spandata.innerHTML = (+sessionStorage.dia + '/' + sessionStorage.mes + '/' + sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status' + click);
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status' + click);
    div3.appendChild(divstatus);
    var divvalor = document.createElement('div');
    divvalor.classList.add('valor');
    divvalor.innerHTML = "4";
    divstatus.appendChild(divvalor);
    var divtipo = document.createElement('div');
    divtipo.classList.add('tipo');
    divtipo.innerHTML = "lidos";
    divstatus.appendChild(divtipo);
    var divstatus1 = document.createElement('div');
    divstatus1.classList.add('status' + click);
    div3.appendChild(divstatus1);
    var divvalor1 = document.createElement('div');
    divvalor1.classList.add('valor');
    divvalor1.innerHTML = "3464";
    divstatus1.appendChild(divvalor1);
    var divtipo1 = document.createElement('div');
    divtipo1.classList.add('tipo');
    divtipo1.innerHTML = "Visualizações";
    divstatus1.appendChild(divtipo1);
    var divstatus2 = document.createElement('div');
    divstatus2.classList.add('status' + click);
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
    $('.card-status' + click).ready(function () {
        var back = ["#Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.card-status' + click).css('background', rand);
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-area', "status");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('display', "grid");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-columns', "1fr 1fr 1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('grid-template-rows', "1fr");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-left-radius', "15px");
    })
    $('.card-status' + click).ready(function () {
        $('.card-status' + click).css('border-bottom-right-radius', "15px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('display', "flex");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('align-items', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('justify-content', "center");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('flex-direction', "column");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('padding', "10px");
    })
    $('.status' + click).ready(function () {
        $('.status' + click).css('color', "white");
    })

}

function exibirFestas() {
    var verifica = document.getElementById('mbFestas').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mbFestas').classList.remove("hide");
    }
}

function exibirShows() {
    var verifica = document.getElementById('mbShows').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mbShows').classList.remove("hide");
    }
}

function exibirKaraoke() {
    var verifica = document.getElementById('mbKaraoke').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mbKaraoke').classList.remove("hide");
    }
}

function exibirJogos() {
    var verifica = document.getElementById('mbJogos').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mbJogos').classList.remove("hide");
    }
}

function exibirEducacao() {
    var verifica = document.getElementById('mbEducacao').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mbEducacao').classList.remove("hide");
    }
}

function exibirCiencia() {
    var verifica = document.getElementById('mbCiencia').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mbCiencia').classList.remove("hide");
    }
}

function exibirTecnologia() {
    var verifica = document.getElementById('mbTecnologia').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mbTecnologia').classList.remove("hide");
    }
}

function exibirSaude() {
    var verifica = document.getElementById('mbSaude').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mbSaude').classList.remove("hide");
    }
}

function exibirEsportes() {
    var verifica = document.getElementById('mbEsportes').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mbEsportes').classList.remove("hide");
    }
}

function exibirFinanceiro() {
    var verifica = document.getElementById('mbFinanceiro').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mbFinanceiro').classList.remove("hide");
    }
}

function fecharFestas() {
    var verifica = document.getElementById('mbFestas').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mbFestas').classList.add("hide");
    }
}

function fecharShows() {
    var verifica = document.getElementById('mbShows').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mbShows').classList.add("hide");
    }
}

function fecharKaraoke() {
    var verifica = document.getElementById('mbKaraoke').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mbKaraoke').classList.add("hide");
    }
}

function fecharJogos() {
    var verifica = document.getElementById('mbJogos').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mbJogos').classList.add("hide");
    }
}

function fecharEducacao() {
    var verifica = document.getElementById('mbEducacao').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mbEducacao').classList.add("hide");
    }
}

function fecharCiencia() {
    var verifica = document.getElementById('mbCiencia').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mbCiencia').classList.add("hide");
    }
}

function fecharTecnologia() {
    var verifica = document.getElementById('mbTecnologia').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mbTecnologia').classList.add("hide");
    }
}

function fecharSaude() {
    var verifica = document.getElementById('mbSaude').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mbSaude').classList.add("hide");
    }
}

function fecharEsportes() {
    var verifica = document.getElementById('mbEsportes').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mbEsportes').classList.add("hide");
    }
}

function fecharFinanceiro() {
    var verifica = document.getElementById('mbFinanceiro').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mbFinanceiro').classList.add("hide");
    }
}
