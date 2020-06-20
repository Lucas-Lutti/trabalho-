
function testeLogin() {
    if (sessionStorage.nome.length!=undefined&&sessionStorage.senha.length!=undefined) {
        var node = document.getElementById("apagar");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        let pai = document.getElementById("Novonome");
        var div = document.createElement('div');
        div.classList.add('header-btn');
        pai.appendChild(div);
        div.innerHTML = sessionStorage.nome;
        
    }
}
