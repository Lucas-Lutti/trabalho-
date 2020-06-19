function login(){
    var username = document.getElementById("loginusername").value;
    var password = document.getElementById("loginpassword").value;

    console.log("Nome: "+username+"  Senha: "+password);
}

function signup(){
    var username = document.getElementById("signupusername");
    var password = document.getElementById("signuppassword");
    var comfirm = document.getElementById("signupcomfirm");

    if(password==comfirm){
        console.log("Nome: "+username+"Senha: "+password);
    }
    else{
        console.log("As senhas tem de ser iguais");
    }
}