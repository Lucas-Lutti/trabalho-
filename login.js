function login() {
    var username = document.getElementById("loginusername").value;
    var password = document.getElementById("loginpassword").value;
    if (password == ' ' | username == ' ') {
        console.log("Nome: " + username + "  Senha: " + password);
        sessionStorage.setItem('nome', loginusername.value);
        sessionStorage.setItem('senha', loginpassword.value);
        redirecionar();
    }
        else {
        console.log("Preencha os espaços vazios");
        alert("Preencha os espaços vazios");
    }
}

function signup() {
    var username = document.getElementById("signupusername").value;
    var password = document.getElementById("signuppassword").value;
    var comfirm = document.getElementById("signupcomfirm").value;

    if ((password == ' ' | confirm == ' ') | username == ' ') {
        if (password == comfirm) {
            console.log("Nome: " + username + "Senha: " + password);
            sessionStorage.setItem('nome', signupusername.value);
            sessionStorage.setItem('senha', signuppassword.value);
            redirecionar();
        }
        else {

            console.log("As senhas tem de ser iguais");
            alert("as senhas não se correspondem");
        }
    }
    else {
        console.log("Preencha os espaços vazios");
        alert("Preencha os espaços vazios");
    }
}

function redirecionar() {
    window.location.replace("index.html");
}