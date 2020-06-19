function login(){
    var username = document.getElementById("loginusername").value;
    var password = document.getElementById("loginpassword").value;

    console.log("Nome: "+username+"  Senha: "+password);
    localStorage.setItem('nome', loginusername.value);
    localStorage.setItem('senha', loginpassword.value);

}

function signup(){
    var username = document.getElementById("signupusername").value;
    var password = document.getElementById("signuppassword").value;
    var comfirm = document.getElementById("signupcomfirm").value;

    if(password==comfirm){
        console.log("Nome: "+username+"Senha: "+password);
        localStorage.setItem('nome', signupusername.value);
        localStorage.setItem('senha', signuppassword.value);
        redirecionar();
    }
    else{
        console.log("As senhas tem de ser iguais");
    }
}

function redirecionar(){
    window.location.replace("index.html");
}