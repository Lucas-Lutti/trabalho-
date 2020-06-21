function login(){
    var username = document.getElementById("loginusername").value;
    var password = document.getElementById("loginpassword").value;

    console.log("Nome: "+username+"  Senha: "+password);
    sessionStorage.setItem('nome', loginusername.value);
    sessionStorage.setItem('senha', loginpassword.value);
    redirecionar();
}

function signup(){
    var username = document.getElementById("signupusername").value;
    var password = document.getElementById("signuppassword").value;
    var comfirm = document.getElementById("signupcomfirm").value;

    if(password==comfirm){
        console.log("Nome: "+username+"Senha: "+password);
        sessionStorage.setItem('nome', signupusername.value);
        sessionStorage.setItem('senha', signuppassword.value);
        redirecionar();
    }
    else{
        console.log("As senhas tem de ser iguais");
        alert("As senhas não se correspondem");
    }
}

function redirecionar(){
    window.location.replace("index.html");
}