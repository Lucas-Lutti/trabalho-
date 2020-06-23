
function testeLogin() {
    if (sessionStorage.nome.length != undefined & sessionStorage.senha.length != undefined) {
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

function exibircat() {
    var verifica = document.getElementById('mb').classList.contains('hide');
    if (verifica == true) {
        document.getElementById('mb').classList.remove("hide");
    }

}

function fecharcat() {
    var verifica = document.getElementById('mb').classList.contains('hide');
    if (verifica == false) {
        document.getElementById('mb').classList.add("hide");
    }
}

var click = -1;
function criarCard() {
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
    if(click%5==0)
    {
        primeiraVez();
    }
    else
    {
        segundaVez();
    }
}

function primeiraVez(){
    let div = document.getElementById("principal");
    var divtop = document.createElement('div');
    divtop.classList.add('row');
    divtop.setAttribute("id","divtop");
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
    spandata.innerHTML = (+sessionStorage.dia+'/'+sessionStorage.mes+'/'+sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status');
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status');
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
    divstatus1.classList.add('status');
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
    divstatus2.classList.add('status');
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
}

function segundaVez(){
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
    spandata.innerHTML = (+sessionStorage.dia+'/'+sessionStorage.mes+'/'+sessionStorage.ano);
    div2.appendChild(spandata);
    var titulo = document.createElement('h2');
    titulo.innerHTML = sessionStorage.nome;
    div2.appendChild(titulo);
    var p = document.createElement('p');
    p.innerHTML = sessionStorage.conteudo;
    div2.appendChild(p)
    var div3 = document.createElement('div');
    div3.classList.add('card-status');
    div1.appendChild(div3);
    var divstatus = document.createElement('div');
    divstatus.classList.add('status');
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
    divstatus1.classList.add('status');
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
    divstatus2.classList.add('status');
    div3.appendChild(divstatus2);
    var divvalor2 = document.createElement('div');
    divvalor2.classList.add('valor');
    divvalor2.innerHTML = "456";
    divstatus2.appendChild(divvalor2);
    var divtipo2 = document.createElement('div');
    divtipo2.classList.add('tipo');
    divtipo2.innerHTML = "Comentarios";
    divstatus2.appendChild(divtipo2);
}
