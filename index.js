
function testeLogin() {
    if (sessionStorage.nome.length!=undefined & sessionStorage.senha.length!=undefined) {
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

function redirecionar(){
    window.location.replace("index.html");
}

<<<<<<< HEAD
=======
function exibircat(){
    var verifica = document.getElementById('mb').classList.contains('hide');
    if(verifica == true){
        document.getElementById('mb').classList.remove("hide");
    }
    
}

function fecharcat(){
    var verifica = document.getElementById('mb').classList.contains('hide');
    if(verifica == false){
        document.getElementById('mb').classList.add("hide");
    }
}
>>>>>>> 7c8f13eb6757d2afbb177b517200db24e0677339
